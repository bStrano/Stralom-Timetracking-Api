import { Module } from '@nestjs/common';
import { RecordsService } from './services/records.service';
import { RecordsController } from './controllers/records.controller';
import { RecordRepository } from './repositories/record.repository';
import { DatabaseModule } from '../../database/database.module';
import { RecordPresenter } from './presenters/records.presenters';

@Module({
  controllers: [RecordsController],
  providers: [RecordsService, RecordRepository, RecordPresenter],
  imports: [DatabaseModule],
})
export class RecordsModule {}
