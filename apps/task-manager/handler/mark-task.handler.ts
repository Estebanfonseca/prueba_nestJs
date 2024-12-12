import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MarkTaskCommand } from '../commands/mark-task.command';
import { Task } from '../models/task.model';

@CommandHandler(MarkTaskCommand)
export class MarkTaskHandler implements ICommandHandler<MarkTaskCommand> {
  constructor(
    @InjectModel(Task.name) private readonly marktaskModel: Model<Task>,
  ) {}

  async execute(command: MarkTaskCommand): Promise<Task> {
    const { id } = command;

    const task = await this.marktaskModel.findById(id);

    if (!task) {
      throw new Error('Tarea no encontrada');
    }
    task.completado = true;
    task.actualizado = new Date();
    return await task.save();
  }
}
