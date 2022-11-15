import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StartRecordDto } from '../dto/start-record.dto';
import { UpdateRecordDto } from '../dto/update-record.dto';
import { RecordRepository } from '../repositories/record.repository';
import { Record } from '../entities/record.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Project } from '../../projects/entities/project.entity';

@Injectable()
export class RecordsService {
  constructor(private recordRepository: RecordRepository) {}

  async save(userId: number, record: Record) {
    record.userId = userId;
    if (!record.end) {
      await this.stopTrackingIfNecessary(userId);
    }
    if (!record.start) {
      return this.startTracking(userId, record);
    }
    return this.recordRepository.create(record);
  }

  async startTracking(userId: number, createRecordDto: StartRecordDto) {
    await this.stopTrackingIfNecessary(userId);
    const record = new Record();
    record.title = createRecordDto.title;
    record.tags = createRecordDto.tags?.map((item) => {
      const tag = new Tag();
      tag.id = item.id;
      return tag;
    });
    if (createRecordDto.projectId) {
      record.project = new Project();
      record.project.id = createRecordDto.projectId;
    }

    record.userId = userId;
    record.startTracking();
    return this.recordRepository.create(record);
  }

  async stopTrackingIfNecessary(userId: number) {
    const current = await this.findCurrent(userId);
    if (current) {
      await this.stopTracking(userId, current.id);
    }
  }

  async stopTracking(userId: number, recordId: number) {
    const record = await this.findById(recordId);
    if (record.userId != userId) throw new ForbiddenException();
    if (!record) throw new NotFoundException('Record not found.');
    if (record.isFinished())
      throw new BadRequestException('Already finished record.');
    record.stopTracking();
    return this.update(recordId, record);
  }

  findAll(userId: number) {
    return this.recordRepository.findAll(userId);
  }

  findCurrent(userId: number) {
    return this.recordRepository.findCurrent(userId);
  }

  findById(id: number) {
    return this.recordRepository.findById(id);
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.recordRepository.update(id, updateRecordDto);
  }

  remove(id: number) {
    return this.recordRepository.delete(id);
  }
}
