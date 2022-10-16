import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { RecordsModule } from './records/records.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [RecordsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
