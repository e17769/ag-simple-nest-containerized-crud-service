import { IsNotEmpty } from 'class-validator';

export class TranslationDto {
  @IsNotEmpty()
  text: string;
}
