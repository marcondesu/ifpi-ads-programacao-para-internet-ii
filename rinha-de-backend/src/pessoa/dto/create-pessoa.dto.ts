import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePessoaDto {
  @ApiProperty({
    type: String,
    default: 'Apelido de Exemplo',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  apelido: string;

  @ApiProperty({
    type: String,
    default: 'Nome de Exemplo',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    type: String,
    default: '1996-05-21',
    required: true,
  })
  @IsNotEmpty()
  nascimento: string;

  @ApiProperty({
    type: [String],
    default: ['C', 'SQL', 'Node'],
    required: false,
  })
  @IsArray()
  stack: string[] | null;
}
