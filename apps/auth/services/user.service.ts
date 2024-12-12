import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private readonly saltRounds: number = 10;
  constructor(private readonly userRepository: UserRepository) {}

  async findUsername(username: string) {
    return await this.userRepository.findUsername(username);
  }
  async createUser(username: string, password: string) {
    const hashPass = bcrypt.hashSync(password, this.saltRounds);
    return await this.userRepository.createUser(username, hashPass);
  }

  async validatePassword(password: string, hashPass: string) {
    return bcrypt.compareSync(password, hashPass);
  }
}
