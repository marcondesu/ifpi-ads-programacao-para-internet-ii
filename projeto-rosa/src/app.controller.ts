import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

interface CalcularIMCInput {
  nome: string;
  peso: string;
  altura: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome = 'Visitante') {
    const context = {
      nome,
      qtd_letras: nome.length,
    };
    return context;
  }

  @Get('/form-imc')
  @Render('imc')
  formIMC(@Query('imc') imc: string) {
    const registros = this.appService.obterRegistrosIMC();
    const context = { imc, registros };

    return context;
  }

  @Post('/calcular-imc')
  calcularIMC(@Res() res: Response, @Body() input: CalcularIMCInput) {
    const imc = parseFloat(this.appService.calcularIMC(input));
    res.redirect(`/form-imc?imc=${imc.toFixed(1)}`);
  }

  @Post('/add')
  addPost() {}

  @Delete('/delete')
  deletePost() {}

  @Patch('/atualizar')
  atualizarPost() {}

  @Get('/investimento')
  @Render('investimento')
  doSmth() {}
}
