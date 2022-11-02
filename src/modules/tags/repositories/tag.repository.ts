import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/services/prisma.service';
import { plainToInstance } from 'class-transformer';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagRepository {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, tag: CreateTagDto) {
    const tagPrisma = await this.prisma.tag.create({
      data: { ...tag, userId },
    });
    return plainToInstance(Tag, tagPrisma);
  }

  async update(id: number, tag: UpdateTagDto) {
    const tagPrisma = await this.prisma.tag.update({
      where: {
        id,
      },
      data: tag,
    });
    return plainToInstance(Tag, tagPrisma);
  }

  async findById(id: number) {
    const tagPrisma = await this.prisma.tag.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return plainToInstance(Tag, tagPrisma);
  }

  async findAll(userId: number) {
    const tagPrisma = await this.prisma.tag.findMany({
      where: {
        userId,
      },
      orderBy: [
        {
          name: 'desc',
        },
      ],
    });
    return plainToInstance(Tag, tagPrisma);
  }

  async delete(id: number) {
    await this.prisma.tag.delete({
      where: {
        id,
      },
    });
  }
}
