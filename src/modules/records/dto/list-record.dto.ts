import { ApiProperty } from '@nestjs/swagger';

export class ListRecordOptionalParamsDto {
  @ApiProperty({ required: false })
  groupBy?: 'start';
}
