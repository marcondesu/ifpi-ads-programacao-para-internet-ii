import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty()
  apelido: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  nascimento: string;

  @IsArray()
  stack: string[] | null;
}
