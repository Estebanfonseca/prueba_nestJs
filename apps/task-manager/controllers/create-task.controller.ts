import { Controller, Get, Body, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create_task.command';
import { CreateTaskService } from '../services/create-task.service';

@Controller('create-task')
export class CreateTaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly createTaskService: CreateTaskService,
  ) {}

  @Post()
  async create(
    @Body() body: { titulo: string; descripcion: string; fechaLimite: Date },
  ) {
    const { titulo, descripcion, fechaLimite } = body;
    return await this.commandBus.execute(
      new CreateTaskCommand(titulo, descripcion, fechaLimite),
    );
  }

  @Get()
  async getAllTasks() {
    return this.createTaskService.getAllTasks();
  }
}
