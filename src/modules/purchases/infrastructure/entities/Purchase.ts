import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('purchases')
export default class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  product_id: string

  @Column()
  amount: number

  @Column()
  price_unitary: number

  @Column()
  price_total: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
