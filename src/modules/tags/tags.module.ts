import { Module } from '@nestjs/common';
import { TagsService } from './services/tags.service';
import { TagsController } from './controllers/tags.controller';
import { TagRepository } from './repositories/tag.repository';
import { DatabaseModule } from '../../database/database.module';

@Module({
  controllers: [TagsController],
  providers: [TagsService, TagRepository],
  imports: [DatabaseModule],
})
export class TagsModule {}
