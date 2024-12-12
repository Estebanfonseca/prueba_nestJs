import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class DeleteTaskRepository {
  constructor(
    @InjectModel(Task.name)
    private readonly deleteTaskModel: Model<Task>,
  ) {}

  async deleteTask(id: string): Promise<boolean> {
    const result = await this.deleteTaskModel.findByIdAndDelete(id);
    return result !== null;
  }
}
