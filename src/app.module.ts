import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JeModule } from './je/je.module';
import { ProjectsModule } from './projects/projects.module';
import { SprintsModule } from './sprints/sprints.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { Je } from './je/entities/je.entity';
import { Project } from './projects/entities/project.entity';
import { Sprint } from './sprints/entities/sprint.entity';
import { Task } from './tasks/entities/task.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    JeModule,
    ProjectsModule,
    SprintsModule,
    TasksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'application',
      password: 'application',
      database: 'workflow',
      entities: [Je, Project, Sprint, Task, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
