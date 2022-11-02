import { Module } from '@nestjs/common';
import { ProjectsService } from './services/projects.service';
import { ProjectsController } from './controllers/projects.controller';
import { DatabaseModule } from '../../database/database.module';
import { ProjectRepository } from './repositories/project.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectRepository],
  imports: [DatabaseModule],
})
export class ProjectsModule {}
