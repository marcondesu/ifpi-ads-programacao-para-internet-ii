import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  obterRegistrosIMC(): void {
    console.log('obterRegistrosIMC()');
  }
}

/* export class CalcularIMCInput {
  private nome: string;
  private peso: number;
  private altura: number;
} */
