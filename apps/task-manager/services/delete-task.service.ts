import { Injectable } from '@nestjs/common';
import { DeleteTaskRepository } from '../repositories/delete-task.repository';

@Injectable()
export class DeleteTaskService {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}

  async deleteTask(id: string): Promise<boolean> {
    return await this.deleteTaskRepository.deleteTask(id);
  }
}
