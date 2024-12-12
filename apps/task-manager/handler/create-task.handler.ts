import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskCommand } from '../commands/create_task.command';
import { Task } from '../models/task.model';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @InjectModel(Task.name)
    private readonly createTaskModel: Model<Task>,
  ) {}
  async execute(command: CreateTaskCommand): Promise<Task> {
    const { titulo, descripcion, fechaLimite } = command;
    const task = new this.createTaskModel({ titulo, descripcion, fechaLimite });
    return await task.save();
  }
}
