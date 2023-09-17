/* eslint-disable prettier/prettier */
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty()
  apelido: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsDate()
  nascimento: number;

  @IsArray()
  stack: string[];
}
