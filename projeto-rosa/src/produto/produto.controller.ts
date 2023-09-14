/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { ProdutosService } from './produto.service';
import { NovoProdutoDto } from './entities/Produto';
import { ApiResponse } from "@nestjs/swagger";
import { Response } from 'express';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/listar')
  @ApiResponse({ status: 200, description: 'Retorna a lista de produtos'})
  @ApiResponse({ status: 204, description: 'Não há nenhum produto'})
  public listarProdutos(@Res() res: Response) {
    const produtos = this.produtosService.listarTodos();

    if (produtos.length === 0) {
      res.status(204).send();
    } else {
      res.status(200).json({ produtos });
    }
  }

  @Post('/cadastrar')
  @ApiResponse({ status: 201, description: 'Produto criado'})
  public salvarProduto(@Body() input: NovoProdutoDto) {
    this.produtosService.cadastrar(input);
  }

  @Get('/alternar-status')
  @ApiResponse({ status: 200, description: 'Status do produto alterado'})
  @ApiResponse({ status: 400, description: 'O produto informado não existe'})
  public alternarStatus(@Query('id') idProduto: string, @Res() res: Response) {
    if (this.produtosService.alternarStatus(idProduto)) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  }

  @ApiResponse({ status: 200, description: 'Produto removido'})
  @ApiResponse({ status: 400, description: 'O produto informado não existe'})
  @Get('remover')
  public removerProduto(@Query('id') idProduto: string, @Res() res: Response) {
    if (this.produtosService.remover(idProduto)) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  }
}
