import { Injectable } from '@nestjs/common';
import { MarkTaskRepository } from '../repositories/mark-task.repository';
import { Task } from '../models/task.model';

@Injectable()
export class MarkTaskService {
  constructor(private readonly markTaskRepository: MarkTaskRepository) {}

  async markTask(id: string): Promise<Task | null> {
    return this.markTaskRepository.markTask(id);
  }
}
