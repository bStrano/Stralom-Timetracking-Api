import { ApiProperty } from '@nestjs/swagger';

export class StartRecordDto {
  @ApiProperty()
  title!: string;
}
