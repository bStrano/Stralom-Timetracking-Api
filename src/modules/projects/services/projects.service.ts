import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectRepository } from '../repositories/project.repository';

@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectRepository) {}

  create(userId: number, createProjectDto: CreateProjectDto) {
    return this.projectRepository.create(userId, createProjectDto);
  }

  findAll(userId: number) {
    return this.projectRepository.findAll(userId);
  }

  findOne(id: number) {
    return this.projectRepository.findById(id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
