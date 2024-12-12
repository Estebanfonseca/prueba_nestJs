import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class StateTaskRepository {
  constructor(
    @InjectModel(Task.name) private readonly stateTaskModel: Model<Task>,
  ) {}

  async stateTaskInProgress(id: string): Promise<Task | null> {
    return this.stateTaskModel
      .findByIdAndUpdate(id, { estado: 'en curso' }, { new: true })
      .exec();
  }
}
