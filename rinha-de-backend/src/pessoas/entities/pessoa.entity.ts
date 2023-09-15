/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  apelido: string;

  @Column({ name: 'apelido', type: 'varchar', length: 32 })
  
  @Column({ name: 'nome', type: 'varchar', length: 100 })
  nome: string;

  @Column({ name: 'nascimento', type: 'date' })
  nascimento: Date;

  @Column({ name: 'stack', type: 'varchar', array: true })
  stack: string[];
}
