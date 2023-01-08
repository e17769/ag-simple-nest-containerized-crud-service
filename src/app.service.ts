import { Injectable } from '@nestjs/common';
import { TranslationDto } from 'src/links/translation.dtos';

@Injectable()
export class AppService {
  getHello(): string {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    var version = json.version;
    return '<b>Version:</b> ' + version;
  }

  translateToGadir({
    trnalsationDto,
  }: {
    trnalsationDto: TranslationDto;
  }): TranslationDto {
    return new TranslationDto(
      trnalsationDto.text
        .trim()
        .split('')
        .reverse()
        .map((c) => (c = convertChar(c)))
        .map((o, index) => {
          return index & 1 ? o : o.toLocaleUpperCase();
        })
        .join(''),
    );
  }
}
function convertChar(char: string): string {
  char = char.toLowerCase();
  switch (char) {
    case 'a':
      return '@';
    case 'i':
      return '1';
    case 'b':
      return '6';
    case 'e':
      return '3';
    case 's':
      return '5';
    case 'f':
      return ';';
    case 'g':
      return '9';
    case 'm':
      return 'w';
    case 'w':
      return 'm';
    case ' ':
      return '.';
    case 'o':
      return '0';
    default:
      return char;
  }
}
