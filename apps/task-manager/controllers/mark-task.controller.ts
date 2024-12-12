import { Controller, Patch, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { MarkTaskCommand } from '../commands/mark-task.command';

@Controller('mark-task')
export class MarkTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':id/complete')
  async markTask(@Param('id') id: string): Promise<{ success: boolean }> {
    await this.commandBus.execute(new MarkTaskCommand(id));
    return { success: true };
  }
}
