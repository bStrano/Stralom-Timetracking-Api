import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StartRecordDto } from '../dto/start-record.dto';
import { UpdateRecordDto } from '../dto/update-record.dto';
import { RecordRepository } from '../repositories/record.repository';
import { Record } from '../entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(private recordRepository: RecordRepository) {}

  async startTracking(userId: number, createRecordDto: StartRecordDto) {
    const record = new Record();
    record.title = createRecordDto.title;
    record.userId = userId;
    record.startTracking();
    return this.recordRepository.create(record);
  }

  async stopTracking(userId: number, recordId: number) {
    const record = await this.findById(recordId);
    if (!record) throw new NotFoundException('Record not found.');
    if (record.isFinished())
      throw new BadRequestException('Already finished record.');
    record.stopTracking();
    return this.update(recordId, record);
  }

  findAll(userId: number) {
    return this.recordRepository.findAll(userId);
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
