/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

export interface CalcularIMCInput {
  nome: string;
  peso: string;
  altura: string;
}

@Injectable()
export class AppService {
  calcularIMC(input: any): any {
    input.peso = Number(input.peso);
    input.altura = Number(input.altura);

    return input.peso / (input.altura * input.altura);
  }

  obterRegistrosIMC(): void {
    return;
  }
}
