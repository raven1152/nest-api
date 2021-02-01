import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { JeModule } from './je/je.module';
import { Project } from './projects/entities/project.entity';
import { Task } from './tasks/entities/task.entity';
import { User } from './users/entities/user.entity';
import { Je } from './je/entities/je.entity';

@Module({
  imports: [
    ProjectsModule,
    TasksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'application',
      password: 'application',
      database: 'workflow',
      entities: [User, Project, Task, Je],
      synchronize: true,
    }),
    JeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
