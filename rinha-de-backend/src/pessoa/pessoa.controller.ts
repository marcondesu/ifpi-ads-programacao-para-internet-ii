import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pessoas')
@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  @ApiBody({
    type: [CreatePessoaDto],
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'A pessoa foi criada com sucesso',
  })
  @ApiResponse({
    status: 422,
    description: 'Requisição inválida',
  })
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return await this.pessoaService.create(createPessoaDto);
  }

  @Get('/:id')
  @ApiParam({
    type: String,
    name: 'id',
    description: 'Identificador da pessoa',
    required: true,
  })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({
    status: 404,
    description: 'Não há nenhuma pessoa com esse ID',
  })
  async findOne(@Param('id') id: string) {
    return await this.pessoaService.findOne(id);
  }

  @Get()
  @ApiParam({
    type: String,
    name: 't',
    description: 'Termo procurado',
    required: true,
  })
  @ApiResponse({ status: 200, description: 'Ok' })
  async search(@Query('t') t: string) {
    return await this.pessoaService.search(t);
  }

  @Get('/contagem-pessoas')
  @ApiResponse({ status: 200, description: 'Ok' })
  async count() {
    return await this.pessoaService.count();
  }

  /* @Get()
  async findAll() {
    return await this.pessoaService.findAll();
  } */
}
