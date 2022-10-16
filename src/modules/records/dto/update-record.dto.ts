import { ApiProperty } from '@nestjs/swagger';

export class UpdateRecordDto {
  @ApiProperty()
  title?: string;
  @ApiProperty()
  start?: Date;
  @ApiProperty()
  end?: Date;
}
