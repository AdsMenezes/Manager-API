import { Repository, getRepository } from 'typeorm'

import Product from '../entities/Product'
import IProductsRepository from '@modules/products/domain/repositories/IProductsRepository'
import ICreateProductDTO from '@modules/products/domain/dtos/ICreateProductDTO'

export default class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>

  constructor() {
    this.repository = getRepository(Product)
  }

  public async create({
    title,
    description,
    cost,
    price,
    amount,
    image,
    provider_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      title,
      description,
      cost,
      price,
      amount,
      image,
      provider_id,
    })

    await this.repository.save(product)

    return product
  }
}
