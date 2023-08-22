/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produto/produto.module';
import { ProdutosController } from './produto/produto.controller';
import { ProdutosService } from './produto/produto.service';

@Module({
  imports: [ProdutosModule],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
