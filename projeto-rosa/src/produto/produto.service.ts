/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NovoProdutoDto, Produto, ProdutoStatus } from './entities/Produto';
import { ulid } from 'ulidx';

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
  cadastrar(input: NovoProdutoDto) {
    const novoProduto: Produto = {
      id: ulid(),
      nome: input.nome,
      destinacao: input.destinacao,
      status: input.status,
      taxaAdiministracao: input.taxaAdministracao,
      taxaRentabilidade: input.taxaRentabilidade,
      vencimento: input.vencimento,
    }

    produtos.push(novoProduto);
  }

  listarTodos() {
    return produtos;
  }
}
