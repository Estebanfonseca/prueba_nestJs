import { Module } from '@nestjs/common';
import { TaskManagerModule } from 'apps/task-manager/src/task-manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'apps/auth/src/auth.module';
import { User } from 'apps/auth/entity/user.entity';

@Module({
  imports: [
    TaskManagerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: 'Esteban57P',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
