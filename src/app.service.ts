import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    var version = json.version;
    return version; //'Versions 1.0.4';
  }
}
