import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTaskCommand } from '../commands/update-task.command';
import { Task } from '../models/task.model';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(
    @InjectModel(Task.name)
    private readonly updateTaskModel: Model<Task>,
  ) {}

  async execute(command: UpdateTaskCommand): Promise<Task> {
    const { id, titulo, descripcion, completado, fechaLimite } = command;
    const updateTask = await this.updateTaskModel.findById(id);
    if (!updateTask) {
      throw new Error('Tarea no encontrada');
    }
    if (titulo !== undefined) updateTask.titulo = titulo;
    if (descripcion !== undefined) updateTask.descripcion = descripcion;
    if (completado !== undefined) updateTask.completado = completado;
    if (fechaLimite !== undefined) updateTask.fechaLimite = fechaLimite;

    updateTask.actualizado = new Date();
    return updateTask.save();
  }
}
