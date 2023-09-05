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
  nome: string;
  status: ProdutoStatus;
  destinacao: string;
  taxaAdministracao: number;
  taxaRentabilidade: number;
  prazo: number;
  vencimento: Date;
}
