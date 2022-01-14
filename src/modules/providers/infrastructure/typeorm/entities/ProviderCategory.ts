import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'

import Provider from './Provider'
@Entity('providers_categories')
export default class ProviderCategory {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @OneToMany(() => Provider, provider => provider.category)
  providers: Provider[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
