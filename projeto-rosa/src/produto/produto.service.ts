/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ulid } from 'ulidx';

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
  vencimento: Date;
}

const produtos: Produto[] = [
  {
    id: ulid(),
    nome: 'CDB ROSA 2024',
    destinacao: 'Investimento Educacional',
    status: ProdutoStatus.DISPONIVEL,
    taxaAdiministracao: 0,
    taxaRentabilidade: 10,
    vencimento: new Date(2023, 11, 31),
  }
]

@Injectable()
export class ProdutosService {
  listarTodos() {
    console.log(produtos);
  }
  adicionarNovo(input: Produto) {
    console.log(input);
  }
}
