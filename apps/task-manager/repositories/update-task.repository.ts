import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class UpdateTaskRepository {
  constructor(
    @InjectModel(Task.name)
    private readonly updateTaskModel: Model<Task>,
  ) {}

  async findById(id: string): Promise<Task | null> {
    return this.updateTaskModel.findById(id).exec();
  }
  async updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
    return this.updateTaskModel
      .findByIdAndUpdate(id, updates, { new: true })
      .exec();
  }
}
