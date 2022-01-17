import { v4 as uuidv4 } from 'uuid'

import Product from '@modules/products/infrastructure/typeorm/entities/Product'
import IProductsRepository from '../IProductsRepository'
import ICreateProductDTO from '../../dtos/ICreateProductDTO'

export default class FakeProductsRepository implements IProductsRepository {
  private products: Product[] = []

  public async create({
    title,
    description,
    cost,
    price,
    amount,
    image,
    provider_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product()

    Object.assign(product, {
      id: uuidv4(),
      title,
      description,
      cost,
      price,
      amount,
      image,
      provider_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.products.push(product)

    return product
  }
}
