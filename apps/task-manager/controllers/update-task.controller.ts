import { Controller, Put, Param, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../commands/update-task.command';

@Controller('update-task')
export class UpdateTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body()
    body: {
      titulo?: string;
      descripcion?: string;
      completado?: boolean;
      fechaLimite?: Date;
    },
  ) {
    const { titulo, descripcion, completado, fechaLimite } = body;
    return this.commandBus.execute(
      new UpdateTaskCommand(id, titulo, descripcion, completado, fechaLimite),
    );
  }
}
