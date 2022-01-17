import { Repository, getRepository } from 'typeorm'

import Purchase from '../entities/Purchase'
import IPurchasesRepository from '@modules/purchases/domain/repositories/IPurchasesRepository'
import ICreatePurchaseDTO from '@modules/purchases/domain/dtos/ICreatePurchaseDTO'

export default class PurchasesRepository implements IPurchasesRepository {
  private repository: Repository<Purchase>

  constructor() {
    this.repository = getRepository(Purchase)
  }

  public async findById(id: string): Promise<Purchase> {
    return await this.repository.findOne(id)
  }

  public async create({
    product_id,
    amount,
    price_unitary,
    price_total,
  }: ICreatePurchaseDTO): Promise<Purchase> {
    const purchase = this.repository.create({
      product_id,
      amount,
      price_unitary,
      price_total,
    })

    await this.repository.save(purchase)

    return purchase
  }
}
