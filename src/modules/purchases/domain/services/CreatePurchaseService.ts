import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IProductsRepository from '@modules/products/domain/repositories/IProductsRepository'
import IPurchasesRepository from '../repositories/IPurchasesRepository'
import IResponsePurchaseDTO from '../dtos/IResponsePurchaseDTO'
import PurchaseMap from '../mappers/PurchaseMap'

interface IRequest {
  product_id: string
  amount: number
}

@injectable()
export default class CreatePurchaseService {
  constructor(
    @inject('ProductsRepository')
    private readonly productsRepository: IProductsRepository,
    @inject('PurchasesRepository')
    private readonly purchasesRepository: IPurchasesRepository
  ) {}

  public async execute({
    product_id,
    amount,
  }: IRequest): Promise<IResponsePurchaseDTO> {
    const product = await this.productsRepository.findById(product_id)

    if (!product) {
      throw new AppError('Product not exists.')
    }

    const totalPurchasePrice = amount * product.cost

    const purchase = await this.purchasesRepository.create({
      product_id,
      amount,
      price_unitary: product.cost,
      price_total: totalPurchasePrice,
    })

    return PurchaseMap.toDTO(purchase)
  }
}
