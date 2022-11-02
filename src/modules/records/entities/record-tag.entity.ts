import { Record } from './record.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RecordTag {
  @ApiProperty()
  timeRecord!: Record;
  @ApiProperty()
  tag!: Tag;
  @ApiProperty()
  timeRecordId!: number;
  @ApiProperty()
  tagId!: number;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt?: Date;
}
