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

  private createObject(createPessoaDto: CreatePessoaDto): Pessoa {
    const pessoa = new Pessoa();
    pessoa.nascimento = new Date(createPessoaDto.nascimento);
    pessoa.nome = createPessoaDto.nome;
    pessoa.apelido = createPessoaDto.apelido;
    pessoa.stack = createPessoaDto.stack;

    return pessoa;
  }

  public async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    const pessoa = this.createObject(createPessoaDto);
    return await this.repository.save(pessoa);
  }

  public async findAll(): Promise<Pessoa[]> {
    console.log('findAll');
    return await this.repository.find();
  }

  public async findOne(id: string): Promise<Pessoa[]> {
    console.log('findOne', id);
    return await this.repository.find({ where: { id: id } });
  }

  public async search(termo: string): Promise<Pessoa[]> {
    console.log('search', termo);
    const pessoas = await this.repository
      .createQueryBuilder('pessoa')
      .where('pessoa.nome LIKE :termo', { termo: `%${termo}%` })
      .orWhere('pessoa.apelido LIKE :termo', { termo: `%${termo}%` })
      .orWhere('(:termo = ANY(pessoa.stack))', { termo })
      .take(50)
      .getMany();

    return pessoas;
  }

  public async count() {
    return await this.repository.count();
  }
}
