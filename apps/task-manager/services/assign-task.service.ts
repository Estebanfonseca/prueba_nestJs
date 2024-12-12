import { Injectable } from '@nestjs/common';
import { AssignTaskRepository } from '../repositories/assign-task.repository';
import { Task } from '../models/task.model';

@Injectable()
export class AssignTaskService {
  constructor(private readonly assignTaskRepository: AssignTaskRepository) {}

  async assignUser(taskId: string, userId: string): Promise<Task | null> {
    return this.assignTaskRepository.assignUser(taskId, userId);
  }
}
