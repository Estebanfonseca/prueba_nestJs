import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop({ default: 'por hacer' })
  estado: string;

  @Prop({ default: false })
  completado: boolean;

  @Prop()
  fechaLimite: Date;

  @Prop({ default: null })
  asignacion: string;

  @Prop({ default: Date.now() })
  creado: Date;

  @Prop({ default: Date.now() })
  actualizado: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
