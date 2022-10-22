import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecordsService } from '../services/records.service';
import { UpdateRecordDto } from '../dto/update-record.dto';
import { ApiTags } from '@nestjs/swagger';
import { StartRecordDto } from '../dto/start-record.dto';

@ApiTags('Time Records')
@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post('/start')
  startTracking(@Body() createRecordDto: StartRecordDto) {
    return this.recordsService.startTracking(1, createRecordDto);
  }

  @Patch('/stop/:id')
  stopTracking(@Param('id') recordId: number) {
    return this.recordsService.stopTracking(1, +recordId);
  }

  @Get()
  findAll() {
    return this.recordsService.findAll(1);
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
