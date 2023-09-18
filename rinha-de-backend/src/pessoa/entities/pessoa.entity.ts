import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'apelido',
    type: 'varchar',
    length: 32,
    nullable: false,
    unique: true,
  })
  apelido: string;

  @Column({ name: 'nome', type: 'varchar', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'nascimento', type: 'date', nullable: true })
  nascimento: Date;

  @Column({ name: 'stack', type: 'varchar', array: true, nullable: false })
  stack: string[];
}
