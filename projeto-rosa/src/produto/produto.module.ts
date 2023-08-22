/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdutosController } from './produto.controller';
import { ProdutosService } from './produto.service';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
