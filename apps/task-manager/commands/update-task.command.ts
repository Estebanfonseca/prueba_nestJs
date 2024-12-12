export class UpdateTaskCommand {
  constructor(
    public readonly id: string,
    public readonly titulo?: string,
    public readonly descripcion?: string,
    public readonly completado?: boolean,
    public readonly fechaLimite?: Date,
  ) {}
}
