import { Injectable } from '@nestjs/common';
import { CreateTaskRepository } from '../repositories/create-task.repository';

@Injectable()
export class CreateTaskService {
  constructor(private readonly createTaskRepository: CreateTaskRepository) {}

  async create(data: {
    titulo: string;
    descripcion: string;
    fechaLimite: Date;
  }) {
    return await this.createTaskRepository.create(data);
  }

  async getAllTasks() {
    return await this.createTaskRepository.findAllTask();
  }
}
