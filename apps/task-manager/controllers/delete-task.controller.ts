import { Controller, Delete, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeleteTaskCommand } from '../commands/delete-task.command';

@Controller('delete-task')
export class DeleteTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<boolean> {
    return await this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
