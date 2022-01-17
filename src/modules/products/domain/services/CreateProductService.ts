import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IProvidersRepository from '@modules/providers/domain/repositories/IProvidersRepository'
import IPurchasesRepository from '@modules/purchases/domain/repositories/IPurchasesRepository'
import IProductsRepository from '../repositories/IProductsRepository'
import IResponseProductDTO from '../dtos/IResponseProductDTO'
import ProductMap from '../mappers/ProductMap'

interface IRequest {
  title: string
  description: string
  cost: number
  price: number
  amount: number
  image?: string
  provider_id?: string
}

@injectable()
export default class CreateProductService {
  constructor(
    @inject('ProvidersRepository')
    private readonly providersRepository: IProvidersRepository,
    @inject('PurchasesRepository')
    private readonly purchasesRepository: IPurchasesRepository,
    @inject('ProductsRepository')
    private readonly productsRepository: IProductsRepository
  ) {}

  public async execute({
    title,
    description,
    cost,
    price,
    amount,
    image,
    provider_id,
  }: IRequest): Promise<IResponseProductDTO> {
    const checkProviderExists = await this.providersRepository.findById(
      provider_id
    )

    if (!checkProviderExists) {
      throw new AppError('Provider not exists.')
    }

    const product = await this.productsRepository.create({
      title,
      description,
      cost,
      price,
      amount,
      image,
      provider_id,
    })

    const totalPurchasePrice = amount * cost

    await this.purchasesRepository.create({
      product_id: product.id,
      amount,
      price_unitary: cost,
      price_total: totalPurchasePrice,
    })

    return ProductMap.toDTO(product)
  }
}
