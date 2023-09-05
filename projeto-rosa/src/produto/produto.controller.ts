/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Redirect, Render, Res } from "@nestjs/common";
import { ProdutosService } from './produto.service';
import { NovoProdutoDto } from './entities/Produto';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/listar')
  @Render('produtos/listar')
  public listarProdutos() {
    return { produtos: this.produtosService.listarTodos() };
  }

  @Get('/novo')
  @Render('produtos/formulario')
  public formularioProduto() {
    return;
  }

  @Post('/salvar')
  @Redirect('/listar')
  public salvarProduto(@Body() input: NovoProdutoDto) {
    this.produtosService.cadastrar(input);
  }

  @Get('/alternar-status')
  @Redirect('/listar')
  public alternarStatus(@Query('id') idProduto: string) {
    this.produtosService.alternarStatus(idProduto);
  }

  @Get('remover')
  @Redirect('/listar')
  public removerProduto(@Query('id') idProduto: string) {
    this.produtosService.remover(idProduto);
  }
}
