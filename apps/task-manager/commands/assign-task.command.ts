export class AssignTaskCommand {
  constructor(
    public readonly taskId: string,
    public readonly userId: string,
  ) {}
}
