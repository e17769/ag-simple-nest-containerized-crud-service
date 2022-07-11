import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksController } from './links/links.controller';

@Module({
  imports: [],
  controllers: [AppController, LinksController],
  providers: [AppService],
})
export class AppModule {}
