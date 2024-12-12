import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AssignTaskCommand } from '../commands/assign-task.command';
import { Task } from '../models/task.model';

@CommandHandler(AssignTaskCommand)
export class AssignTaskHandler implements ICommandHandler<AssignTaskCommand> {
  constructor(
    @InjectModel(Task.name) private readonly assignTaskModel: Model<Task>,
  ) {}

  async execute(command: AssignTaskCommand): Promise<Task> {
    const { taskId, userId } = command;
    const task = await this.assignTaskModel.findById(taskId);
    if (!task) {
      throw new Error('Tarea no encontrada');
    }

    task.asignacion = userId;
    task.actualizado = new Date();
    return await task.save();
  }
}
