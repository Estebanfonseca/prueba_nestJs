import { Injectable } from '@nestjs/common';
import { StateTaskRepository } from '../repositories/state-task.repository';
import { Task } from '../models/task.model';

@Injectable()
export class MarkTaskService {
  constructor(private readonly stateTaskRepository: StateTaskRepository) {}

  async stateTask(id: string): Promise<Task | null> {
    return this.stateTaskRepository.stateTaskInProgress(id);
  }
}
