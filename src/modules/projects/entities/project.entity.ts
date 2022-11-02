import { ApiProperty } from '@nestjs/swagger';
import { Record } from '../../records/entities/record.entity';

export class Project {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  color!: string;
  @ApiProperty()
  userId!: number;
  @ApiProperty()
  timeRecords?: Record[];
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt?: Date;
}
