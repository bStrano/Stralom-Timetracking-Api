import { Module } from '@nestjs/common';
import { RecordsService } from './services/records.service';
import { RecordsController } from './controllers/records.controller';
import { RecordRepository } from './repositories/record.repository';
import { DatabaseModule } from '../../database/database.module';

@Module({
  controllers: [RecordsController],
  providers: [RecordsService, RecordRepository],
  imports: [DatabaseModule],
})
export class RecordsModule {}
