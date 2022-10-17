
import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('home')
export class LinksController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getLinks(): string {
      return this.appService.getHello();
    }
}