import { v4 as uuidv4 } from 'uuid'

import Purchase from '@modules/purchases/infrastructure/entities/Purchase'
import ICreatePurchaseDTO from '../../dtos/ICreatePurchaseDTO'
import IPurchasesRepository from '../IPurchasesRepository'

export default class FakePurchasesRepository implements IPurchasesRepository {
  private purchases: Purchase[] = []

  public async findById(id: string): Promise<Purchase | undefined> {
    return this.purchases.find(purchase => purchase.id === id)
  }

  public async create({
    product_id,
    amount,
    price_unitary,
    price_total,
  }: ICreatePurchaseDTO): Promise<Purchase> {
    const purchase = new Purchase()

    Object.assign(purchase, {
      id: uuidv4(),
      product_id,
      amount,
      price_unitary,
      price_total,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.purchases.push(purchase)

    return purchase
  }
}
