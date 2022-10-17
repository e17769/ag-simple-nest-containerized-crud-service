import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { link } from 'src/typeorm';
import { LinksController } from './controllers/links/links.controller';
import { LinksService } from './services/links/links.service';

@Module({
  imports:[TypeOrmModule.forFeature([link]),],
  controllers: [LinksController],
  providers: [LinksService]
})
export class LinksModule {}
