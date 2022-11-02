import { RecordTag } from '../../records/entities/record-tag.entity';
import { ApiProperty } from '@nestjs/swagger';

export class Tag {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  color!: string;
  @ApiProperty()
  userId!: number;
  @ApiProperty()
  timeRecordTag!: RecordTag;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt?: Date;
}
