import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StateTaskCommand } from '../commands/state-task.command';
import { Task } from '../models/task.model';

@CommandHandler(StateTaskCommand)
export class StateTaskHandler implements ICommandHandler<StateTaskCommand> {
  constructor(
    @InjectModel(Task.name) private readonly stateTaskModel: Model<Task>,
  ) {}
  async execute(command: StateTaskCommand): Promise<Task> {
    const { id } = command;
    const task = await this.stateTaskModel.findById(id);

    if (!task) {
      throw new Error('Tarea no encontrada');
    }
    task.estado = 'en curso';

    return await task.save();
  }
}
