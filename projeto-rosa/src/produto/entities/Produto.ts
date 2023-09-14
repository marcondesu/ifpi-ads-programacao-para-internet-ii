import { ApiProperty } from "@nestjs/swagger";

export enum ProdutoStatus {
  DISPONIVEL = 'Disponível',
  INDISPONIVEL = 'Indisponível',
}

export class Produto {
  id: string;
  nome: string;
  status: string;
  destinacao: string;
  taxaAdiministracao: number;
  taxaRentabilidade: number;
  prazo: number;
  vencimento: Date;
}

export class NovoProdutoDto {
  @ApiProperty({description: 'Nome do produto', default: 'CDB ROSA 2024'})
  nome: string;

  @ApiProperty({description: 'Status do produto', type: Boolean, default: 'Disponível'})
  status: ProdutoStatus;

  @ApiProperty({description: 'Destinação do produto', default: 'Educação'})
  destinacao: string;

  @ApiProperty({description: 'Porcentagem de ganho do ROSA', default: 1, minimum: 0})
  taxaAdministracao: number;

  @ApiProperty({description: 'Porcentagem de rendimento do produto', default: 1, minimum: 1, maximum: 20})
  taxaRentabilidade: number;

  @ApiProperty({description: 'Quantidade mínima de meses para saque', default: 1, minimum: 0, maximum: 48})
  prazo: number;

  @ApiProperty({description: 'Data de vencimento'})
  vencimento: Date;
}
