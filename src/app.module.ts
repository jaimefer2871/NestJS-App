import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, TasksModule, HelloModule, UsersModule],
})
export class AppModule {}
