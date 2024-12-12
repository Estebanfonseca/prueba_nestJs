import { Injectable } from '@nestjs/common';
import { UpdateTaskRepository } from '../repositories/update-task.repository';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly updateTaskRepository: UpdateTaskRepository) {}

  async update(
    Id: string,
    updates: {
      titulo?: string;
      descripcion?: string;
      completado?: boolean;
      fechaLimite?: Date;
    },
  ) {
    return await this.updateTaskRepository.updateTask(Id, updates);
  }
}
