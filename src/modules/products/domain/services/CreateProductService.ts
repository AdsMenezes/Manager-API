import { injectable, inject } from 'tsyringe'

import IProvidersRepository from '@modules/providers/domain/repositories/IProvidersRepository'
import IPurchasesRepository from '@modules/purchases/domain/repositories/IPurchasesRepository'
import IProductsRepository from '../repositories/IProductsRepository'

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
    price,
    amount,
    image,
    provider_id,
  }: IRequest): Promise<void> {
    console.log('Not implemented')
  }
}
