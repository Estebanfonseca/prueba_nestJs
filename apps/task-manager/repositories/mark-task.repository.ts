import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class MarkTaskRepository {
  constructor(
    @InjectModel(Task.name) private readonly markTaskModel: Model<Task>,
  ) {}

  async markTask(id: string): Promise<Task | null> {
    return this.markTaskModel
      .findByIdAndUpdate(
        id,
        { completado: true, actualizado: new Date() },
        { new: true },
      )
      .exec();
  }
}
