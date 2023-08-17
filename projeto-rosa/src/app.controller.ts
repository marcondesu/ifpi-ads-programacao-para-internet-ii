import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService, CalcularIMCInput, Produto } from './app.service';

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

  @Get('/investimento')
  @Render('investimento')
  doNothing() {
    return;
  }

  @Post('/add')
  adicionarProduto(@Res() res: Response, @Body() input: Produto) {
    this.appService.addProduct(input);

    res.redirect('/investimento');
  }

  @Get('/list')
  listarProdutos(@Res() res: Response) {
    this.appService.listProducts();

    res.redirect('/investimento');
  }

  @Post('/delete')
  deletarProduto() {}

  @Post('/update')
  atualizarProduto() {}
}
