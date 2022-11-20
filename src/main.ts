import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {appBuild} from './app.build'

async function bootstrap() {
  appBuild.buildIcons();
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
