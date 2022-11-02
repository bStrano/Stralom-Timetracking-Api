import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/services/prisma.service';
import { Project } from '../entities/project.entity';
import { plainToInstance } from 'class-transformer';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectRepository {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, project: CreateProjectDto) {
    const projectPrisma = await this.prisma.project.create({
      data: { ...project, userId },
    });
    return plainToInstance(Project, projectPrisma);
  }

  async update(id: number, project: UpdateProjectDto) {
    const projectPrisma = await this.prisma.project.update({
      where: {
        id,
      },
      data: project,
    });
    return plainToInstance(Project, projectPrisma);
  }

  async findById(id: number) {
    const projectPrisma = await this.prisma.project.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return plainToInstance(Project, projectPrisma);
  }

  async findAll(userId: number) {
    const projectPrisma = await this.prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: [
        {
          name: 'desc',
        },
      ],
    });
    return plainToInstance(Project, projectPrisma);
  }

  async delete(id: number) {
    await this.prisma.project.delete({
      where: {
        id,
      },
    });
  }
}
