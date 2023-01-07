import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AppService } from 'src/app.service';
import { TranslationDto } from 'src/links/translation.dtos';

@Controller('translate')
export class TranslateController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(ValidationPipe)
  translate(@Body() trnalsationDto: TranslationDto) {
    return this.appService.translateToGadir({ trnalsationDto });
  }
}
