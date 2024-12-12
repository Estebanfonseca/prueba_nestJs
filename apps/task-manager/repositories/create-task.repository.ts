import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class CreateTaskRepository {
  constructor(
    @InjectModel(Task.name)
    private readonly createTask: Model<Task>,
  ) {}
  async create(data: Partial<Task>): Promise<Task> {
    const task = new this.createTask(data);
    return await task.save();
  }

  async findAllTask(): Promise<Task[]> {
    return this.createTask.find().exec();
  }
}
