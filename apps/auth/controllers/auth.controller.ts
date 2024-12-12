import {
  Post,
  Body,
  UseGuards,
  Request,
  Controller,
  Get,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../strategy/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('registro')
  async registro(@Body() body: { username: string; password: string }) {
    const user = await this.userService.findUsername(body.username);
    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'El nombre de usuario ya está en uso',
        },
        HttpStatus.CONFLICT,
      );
    }
    return this.authService.register(body.username, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('validate-token')
  validateToken(@Request() req) {
    return {
      message: 'Token es valido',
      user: req.user,
    };
  }
}
