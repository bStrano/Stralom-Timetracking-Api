import { ApiProperty } from '@nestjs/swagger';

export class StartRecordDto {
  @ApiProperty()
  title!: string;
  @ApiProperty()
  projectId?: number;
  @ApiProperty()
  tags?: { id: number }[];
}
