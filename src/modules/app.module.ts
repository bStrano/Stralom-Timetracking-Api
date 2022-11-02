import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { RecordsModule } from './records/records.module';
import { DatabaseModule } from '../database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [RecordsModule, ProjectsModule, TagsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
