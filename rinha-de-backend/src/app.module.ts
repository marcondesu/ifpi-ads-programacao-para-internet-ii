import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas/pessoas.controller';
import { PessoasService } from './pessoas/pessoas.service';

@Module({
  imports: [],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class AppModule {}
