/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NovoProdutoDto, Produto, ProdutoStatus } from './entities/Produto';
import { ulid } from 'ulidx';
import { DestinacaoException, NomeException, PrazoAposVencimentoException, PrazoException, TaxaAdmNegativaException, TaxaRentException } from './produto.exceptions';

let produtos: Produto[] = [
  {
    id: ulid(),
    nome: 'CDB ROSA 2024',
    destinacao: 'Investimento Educacional',
    status: ProdutoStatus.DISPONIVEL,
    taxaAdiministracao: 0,
    taxaRentabilidade: 10,
    prazo: 32,
    vencimento: new Date(1, 10, 2024),
  },
  {
    id: ulid(),
    nome: 'NOVO PRODUTO 2025',
    destinacao: 'Investimento IFPI',
    status: ProdutoStatus.DISPONIVEL,
    taxaAdiministracao: 0,
    taxaRentabilidade: 15,
    prazo: 48,
    vencimento: new Date(1, 5, 2024),
  },
  {
    id: ulid(),
    nome: 'NEW PRODUCT 2025',
    destinacao: 'Investimento UFPI',
    status: ProdutoStatus.INDISPONIVEL,
    taxaAdiministracao: 0,
    taxaRentabilidade: 6,
    prazo: 16,
    vencimento: new Date(1, 2, 2024),
  }
]

@Injectable()
export class ProdutosService {
  procurarPorId(idProduto: string): Produto | undefined {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id == idProduto) {
        return produtos[i];
      }
    }
  }

  procurarPorIndex(idProduto: string): number | undefined {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id == idProduto) {
        return i - 1;
      }
    }
  }

  validarNome(nome: string) {
    if (nome.length > 32) {
      throw new NomeException();
    }
  }

  validarDestinacao(destinacao: string) {
    if (destinacao.length > 180) {
      throw new DestinacaoException();
    }
  }

  validarTaxaRentabilidade(taxaRentabilidade: number) {
    if (taxaRentabilidade === 0 || taxaRentabilidade > 20) {
      throw new TaxaRentException();
    }
  }

  validarPrazo(prazo: number, vencimento: Date) {
    if (prazo === 0 || prazo > 48) {
      throw new PrazoException();
    } /* else {
      const dataAtual = new Date();
      const novaData =  new Date(dataAtual.setDate(dataAtual.getDate() + (prazo * 30)));
      console.log(novaData.toLocaleDateString());

      if (novaData > vencimento) {
        throw new PrazoAposVencimentoException(); // Lançar exceção caso a validação não passe
      }
    } */
  }

  validarTaxaAdministracao(taxaAdiministracao: number) {
    if (taxaAdiministracao < 0) {
      throw new TaxaAdmNegativaException();
    }
  }

  validarProduto(produto: Produto) {
    this.validarNome(produto.nome);
    this.validarDestinacao(produto.destinacao);
    this.validarTaxaAdministracao(produto.taxaAdiministracao);
    this.validarTaxaRentabilidade(produto.taxaRentabilidade);
    this.validarPrazo(produto.prazo, produto.vencimento);
  }

  cadastrar(input: NovoProdutoDto) {
    const novoProduto: Produto = {
      id: ulid(),
      nome: input.nome,
      destinacao: input.destinacao,
      status: input.status,
      taxaAdiministracao : input.taxaAdministracao,
      taxaRentabilidade: input.taxaRentabilidade,
      prazo: input.prazo,
      vencimento: input.vencimento
    }

    this.validarProduto(novoProduto);

    produtos.push(novoProduto);
  }

  listarTodos() {
    return produtos;
  }

  alternarStatus(idProduto: string) {
    const produto: Produto = this.procurarPorId(idProduto);
    
    produto.status = produto.status === ProdutoStatus.DISPONIVEL ? ProdutoStatus.INDISPONIVEL : ProdutoStatus.DISPONIVEL;
    
    return;
  }
  
  remover(idProduto: string) {
    const prod: Produto = this.procurarPorId(idProduto);
    
    produtos = produtos.filter(produto => produto.id !== prod.id);

    return;
  }
}
