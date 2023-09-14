/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PessoasService {
  getHello(): string {
    return 'Hello World!';
  }
}
