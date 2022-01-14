import { injectable, inject } from 'tsyringe'

import IProvidersRepository from '../repositories/IProvidersRepository'
import IProvidersCategoriesRepository from '../repositories/IProvidersCategoriesRepository'

interface IRequest {
  company: string
  cnpj: string
  category_id: number
  representative: string
  phone: string
}

@injectable()
export default class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private readonly providersRepository: IProvidersRepository,

    @inject('ProvidersCategoriesRepository')
    private readonly providersCategoriesRepository: IProvidersCategoriesRepository
  ) {}

  public async execute({
    company,
    cnpj,
    category_id,
    representative,
    phone,
  }: IRequest): Promise<void> {
    console.log('Not implemented.')
  }
}
