import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '../../tags/entities/tag.entity';
import { Project } from '../../projects/entities/project.entity';

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
  @ApiProperty()
  tags?: Tag[];
  @ApiProperty()
  project?: Project;

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
