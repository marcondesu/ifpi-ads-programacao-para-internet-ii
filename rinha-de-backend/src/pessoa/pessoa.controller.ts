import { Controller, Get, Post, Body } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return await this.pessoaService.create(createPessoaDto);
  }

  @Get()
  async findAll() {
    return await this.pessoaService.findAll();
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(id);
  } */
}
