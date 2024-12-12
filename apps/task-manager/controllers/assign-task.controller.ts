import { Controller, Patch, Param, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AssignTaskCommand } from '../commands/assign-task.command';

@Controller('assign-task')
export class AssignTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':id')
  async assignTask(
    @Param('id') taskId: string,
    @Body('userId') userId: string,
  ): Promise<{ success: boolean }> {
    await this.commandBus.execute(new AssignTaskCommand(taskId, userId));
    return { success: true };
  }
}
