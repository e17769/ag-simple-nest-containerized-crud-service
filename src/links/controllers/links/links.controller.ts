import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateLinkDto } from 'src/links/links.dtos';
import { LinksService } from 'src/links/services/links/links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linkService: LinksService) {}

  @Get()
  getLinks() {
    return this.linkService.getLinks();
  }

  @Get('id/:id')
  findLinksById(@Param('id', ParseIntPipe) id: number) {
    return this.linkService.findLinksById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createLinks(@Body() createLinkDto: CreateLinkDto) {
    return this.linkService.createLink(createLinkDto);
  }

  @Post('hit/:id')
  //@UsePipes(ValidationPipe)
  async linkhits(@Param('id', ParseIntPipe) id: number) {
    let results = '';
    try {
      let hit = await this.linkService.findLinksById(id);
      hit.hit = hit.hit++;
      this.linkService.Update(id, hit);

      results = 'Updated to ' + hit.hit;
    } catch (error) {
      results = error;
    }
    return results;
  }
}
