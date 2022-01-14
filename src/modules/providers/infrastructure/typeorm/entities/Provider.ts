import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import ProviderCategory from './ProviderCategory'

@Entity('providers')
export default class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  company: string

  @Column()
  cnpj: string

  @Column()
  representative: string

  @Column()
  phone: string

  @Column('int')
  category_id: number

  @ManyToOne(() => ProviderCategory, category => category.providers)
  @JoinColumn({ name: 'category_id' })
  category: ProviderCategory

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
