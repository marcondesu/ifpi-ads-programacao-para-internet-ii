/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { Response } from 'express';
import { Produto, ProdutosService } from './produto.service';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/formulario')
  @Render('produtos/formulario')
  doNothing() {
    return;
  }

  @Post('/adicionar')
  adicionarProduto(@Res() res: Response, @Body() input: Produto) {
    this.produtosService.adicionarNovo(input);

    res.redirect('/listar');
  }

  @Get('/listar')
  listarProdutos(@Res() res: Response) {
    return { produtos: this.produtosService.listarTodos() };
  }
}
