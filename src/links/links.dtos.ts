import { IsNotEmpty } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  sort: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  hit: number;
}
