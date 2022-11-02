import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { TagRepository } from '../repositories/tag.repository';

@Injectable()
export class TagsService {
  constructor(private tagRepository: TagRepository) {}

  create(userId: number, createTagDto: CreateTagDto) {
    return this.tagRepository.create(userId, createTagDto);
  }

  findAll(userId: number) {
    return this.tagRepository.findAll(userId);
  }

  findOne(id: number) {
    return this.tagRepository.findById(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.tagRepository.delete(id);
  }
}
