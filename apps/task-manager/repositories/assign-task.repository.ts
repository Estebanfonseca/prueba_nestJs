import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../models/task.model';

export class AssignTaskRepository {
  constructor(
    @InjectModel(Task.name) private readonly assignTaskmodel: Model<Task>,
  ) {}

  async assignUser(taskId: string, userId: string): Promise<Task | null> {
    return await this.assignTaskmodel
      .findByIdAndUpdate(
        taskId,
        { asignacion: userId, actualizado: new Date() },
        { new: true },
      )
      .exec();
  }
}
