
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLinkDto } from 'src/links/links.dtos';
import { link } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(link) private readonly linkRepository: Repository<link>,
  ) {}

  createLink(createLinkDto: CreateLinkDto) {
    const newUser = this.linkRepository.create(createLinkDto);
    return this.linkRepository.save(newUser);
  }

  findLinksById(id: number) {
    return this.linkRepository.findOne({
      where: {
        id: id,
      },
      lock: { mode: 'optimistic', version: 1 },
    });
  }

  getLinks() {
    //.orderBy("time", "DESC")
    return this.linkRepository.find({
      order: {
        sort: 'ASC',
      },
    });
  }
}
