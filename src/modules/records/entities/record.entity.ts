import { ApiProperty } from '@nestjs/swagger';

export class Record {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  title!: string;
  @ApiProperty()
  start!: Date;
  @ApiProperty()
  end?: Date;
  @ApiProperty()
  userId!: number;

  startTracking() {
    this.start = new Date();
  }

  stopTracking() {
    this.end = new Date();
  }

  isFinished() {
    return this.end != null;
  }
}
