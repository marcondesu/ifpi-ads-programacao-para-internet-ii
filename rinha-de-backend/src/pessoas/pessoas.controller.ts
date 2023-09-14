/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PessoasService } from './pessoas.service';

@Controller()
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Get()
  getHello(): string {
    return this.pessoasService.getHello();
  }
}
