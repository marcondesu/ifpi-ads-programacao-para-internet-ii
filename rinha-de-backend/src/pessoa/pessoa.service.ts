import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa) private readonly repository: Repository<Pessoa>,
  ) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    // const pessoa = this.repository.create(createPessoaDto);
    const pessoa = new Pessoa();
    pessoa.nascimento = new Date(createPessoaDto.nascimento);
    pessoa.nome = createPessoaDto.nome;
    pessoa.apelido = createPessoaDto.apelido;
    pessoa.stack = createPessoaDto.stack;

    console.log(pessoa);

    return await this.repository.save(pessoa);
  }

  findAll(): Promise<Pessoa[]> {
    return this.repository.find();
  }

  /* findOne(id: string): Promise<Pessoa> {
    return this.repository.findOne(id);
  } */
}
