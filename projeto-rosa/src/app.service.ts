import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calcularIMC(input: any): any {
    input.peso = Number(input.peso);
    input.altura = Number(input.altura);

    return input.peso / (input.altura * input.altura);
  }

  getHello(): string {
    return 'Hello World!';
  }

  obterRegistrosIMC(): void {
    return;
  }
}
