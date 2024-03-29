import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/services/prisma.service';
import { Record } from '../entities/record.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateRecordDto } from '../dto/update-record.dto';

@Injectable()
export class RecordRepository {
  constructor(private prisma: PrismaService) {}

  async create(record: Omit<Record, 'id'>) {
    const recordPrisma = await this.prisma.timeRecord.create({
      data: {
        ...record,
        tags: { connect: record.tags },
        project: { connect: record.project },
      },
    });
    return plainToInstance(Record, recordPrisma);
  }

  async update(id: number, record: UpdateRecordDto) {
    const recordPrisma = await this.prisma.timeRecord.update({
      where: {
        id,
      },
      data: record,
    });
    return plainToInstance(Record, recordPrisma);
  }

  async findById(id: number) {
    const recordPrisma = await this.prisma.timeRecord.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return plainToInstance(Record, recordPrisma);
  }

  async findCurrent(userId: number) {
    const recordPrisma = await this.prisma.timeRecord.findFirst({
      include: {
        tags: true,
        project: true,
      },
      where: {
        userId,
        end: null,
      },
    });
    return plainToInstance(Record, recordPrisma);
  }

  async findAll(userId: number) {
    const recordPrisma = await this.prisma.timeRecord.findMany({
      include: {
        tags: true,
        project: true,
      },
      where: {
        userId,
      },
      orderBy: [
        {
          start: 'desc',
        },
      ],
    });
    console.log(recordPrisma);
    return plainToInstance(Record, recordPrisma);
  }

  async delete(id: number) {
    await this.prisma.timeRecord.delete({
      where: {
        id,
      },
    });
  }
}
