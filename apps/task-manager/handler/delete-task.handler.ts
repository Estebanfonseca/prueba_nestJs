import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteTaskCommand } from '../commands/delete-task.command';
import { Task } from '../models/task.model';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(
    @InjectModel(Task.name)
    private readonly deleteTaskModel: Model<Task>,
  ) {}

  async execute(command: DeleteTaskCommand): Promise<{ success: boolean }> {
    const { id } = command;

    const deleteTask = await this.deleteTaskModel.findById(id);
    if (!deleteTask) {
      throw new Error(`Tarea con ${id} no encontrada`);
    }

    await this.deleteTaskModel.findByIdAndDelete(id);
    return { success: true };
  }
}
