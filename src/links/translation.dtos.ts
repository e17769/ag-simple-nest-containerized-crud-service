import { IsNotEmpty } from 'class-validator';

export class TranslationDto {
  constructor(newNext: string) {
    this.text = newNext;
  }
  @IsNotEmpty()
  text: string;
}
