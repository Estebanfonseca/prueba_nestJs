import { Controller, Patch, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { StateTaskCommand } from '../commands/state-task.command';

@Controller('state-task')
export class StateTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':id/in-progress')
  async markTask(@Param('id') id: string): Promise<{ success: boolean }> {
    await this.commandBus.execute(new StateTaskCommand(id));
    return { success: true };
  }
}
