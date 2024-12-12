export class CreateTaskCommand {
  constructor(
    public readonly titulo: string,
    public readonly descripcion: string,
    public readonly fechaLimite: Date,
  ) {}
}
