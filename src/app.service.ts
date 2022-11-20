import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return process.env.npm_package_version; //'Versions 1.0.4';
  }
}
