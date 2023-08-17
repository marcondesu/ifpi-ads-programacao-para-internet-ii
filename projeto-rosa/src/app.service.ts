import { Injectable } from '@nestjs/common';

export interface CalcularIMCInput {
  nome: string;
  peso: string;
  altura: string;
}

export interface Produto {
  nome: string;
  status: string;
  destinacao: string;
  taxaRentabilidade: number;
  prazo: number;
  taxaAdiministracao: number;
  vencimento: Date;
}

class Produtos {
  private _products: Produto[] = [];

  getProducts(): Produto[] {
    return this._products;
  }

  addNewProduct(product: Produto): void {
    this._products.push(product);
  }
}

@Injectable()
export class AppService {
  private _prods: Produtos;

  constructor() {
    this._prods = new Produtos();
  }

  addProduct(input: Produto): void {
    this._prods.addNewProduct(input);
  }

  listProducts(): void {
    console.log(this._prods.getProducts());
  }

  calcularIMC(input: any): any {
    input.peso = Number(input.peso);
    input.altura = Number(input.altura);

    return input.peso / (input.altura * input.altura);
  }

  obterRegistrosIMC(): void {
    return;
  }
}
