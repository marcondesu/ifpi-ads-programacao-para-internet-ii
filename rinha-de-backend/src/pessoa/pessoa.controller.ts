import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return await this.pessoaService.create(createPessoaDto);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.pessoaService.findOne(id);
  }

  @Get()
  async search(@Query('t') t: string) {
    return await this.pessoaService.search(t);
  }

  @Get('/contagem-pessoas')
  async count() {
    return await this.pessoaService.count();
  }

  /* @Get()
  async findAll() {
    return await this.pessoaService.findAll();
  } */
}
