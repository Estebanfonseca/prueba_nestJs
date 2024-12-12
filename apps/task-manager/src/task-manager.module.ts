import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { Task, TaskSchema } from '../models/task.model';
import { CreateTaskHandler } from '../handler/create-task.handler';
import { CreateTaskRepository } from '../repositories/create-task.repository';
import { CreateTaskService } from '../services/create-task.service';
import { CreateTaskController } from '../controllers/create-task.controller';
import { UpdateTaskHandler } from '../handler/update-task.handler';
import { UpdateTaskRepository } from '../repositories/update-task.repository';
import { UpdateTaskService } from '../services/update-task.service';
import { UpdateTaskController } from '../controllers/update-task.controller';
import { DeleteTaskHandler } from '../handler/delete-task.handler';
import { DeleteTaskRepository } from '../repositories/delete-task.repository';
import { DeleteTaskService } from '../services/delete-task.service';
import { DeleteTaskController } from '../controllers/delete-task.controller';
import { MarkTaskHandler } from '../handler/mark-task.handler';
import { MarkTaskRepository } from '../repositories/mark-task.repository';
import { MarkTaskService } from '../services/mark-task.service';
import { MarkTaskController } from '../controllers/mark-task.controller';
import { AssignTaskHandler } from '../handler/assign-task.handler';
import { AssignTaskRepository } from '../repositories/assign-task.repository';
import { AssignTaskService } from '../services/assign-task.service';
import { AssignTaskController } from '../controllers/assign-task.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/nestjs', {
      dbName: 'nestjs',
    }),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    CqrsModule,
  ],
  controllers: [
    CreateTaskController,
    UpdateTaskController,
    DeleteTaskController,
    MarkTaskController,
    AssignTaskController,
  ],
  providers: [
    CreateTaskHandler,
    CreateTaskRepository,
    CreateTaskService,
    UpdateTaskHandler,
    UpdateTaskRepository,
    UpdateTaskService,
    DeleteTaskHandler,
    DeleteTaskRepository,
    DeleteTaskService,
    MarkTaskHandler,
    MarkTaskRepository,
    MarkTaskService,
    AssignTaskHandler,
    AssignTaskRepository,
    AssignTaskService,
  ],
})
export class TaskManagerModule {}
