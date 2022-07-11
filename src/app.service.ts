import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLinks(): string{
    return '{{link: http://home},{link: https://Track/}}';

  }
}
