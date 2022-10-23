import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RecordsService } from '../services/records.service';
import { UpdateRecordDto } from '../dto/update-record.dto';
import { ApiTags } from '@nestjs/swagger';
import { StartRecordDto } from '../dto/start-record.dto';
import { RecordPresenter } from '../presenters/records.presenters';
import { ListRecordOptionalParamsDto } from '../dto/list-record.dto';

@ApiTags('Time Records')
@Controller('records')
export class RecordsController {
  constructor(
    private readonly recordsService: RecordsService,
    private readonly recordsPresenter: RecordPresenter,
  ) {}

  @Post('/start')
  startTracking(@Body() createRecordDto: StartRecordDto) {
    return this.recordsService.startTracking(1, createRecordDto);
  }

  @Patch('/stop/:id')
  stopTracking(@Param('id') recordId: number) {
    return this.recordsService.stopTracking(1, +recordId);
  }

  @Get()
  async findAll(@Query() query: ListRecordOptionalParamsDto) {
    const data = await this.recordsService.findAll(1);
    if (query.groupBy === 'start') {
      return this.recordsPresenter.groupRecordsByStartDate(data);
    }
    return data;
  }

  @Get('/current')
  findCurrent() {
    return this.recordsService.findCurrent(1);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
    return this.recordsService.update(+id, updateRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }
}
