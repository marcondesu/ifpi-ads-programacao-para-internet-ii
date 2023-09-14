/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdutosModule } from './produto/produto.module';
import { ProdutosController } from './produto/produto.controller';
import { ProdutosService } from './produto/produto.service';

@Module({
  imports: [ProdutosModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class AppModule {}
