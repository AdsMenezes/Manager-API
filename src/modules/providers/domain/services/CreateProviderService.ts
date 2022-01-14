import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IProvidersRepository from '../repositories/IProvidersRepository'
import IProvidersCategoriesRepository from '../repositories/IProvidersCategoriesRepository'
import IProviderResponseDTO from '../dtos/IProviderResponseDTO'
import ProviderMap from '../mappers/ProviderMap'
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
  }: IRequest): Promise<IProviderResponseDTO> {
    const providerAlreadyExists = await this.providersRepository.findByCnpj(
      cnpj
    )

    if (providerAlreadyExists) {
      throw new AppError('Provider already exists.')
    }

    const category = await this.providersCategoriesRepository.findById(
      category_id
    )

    if (!category) {
      throw new AppError('Category not exists.')
    }

    const provider = await this.providersRepository.create({
      company,
      cnpj,
      category_id,
      representative,
      phone,
    })

    Object.assign(provider, {
      category,
    })

    return ProviderMap.toDTO(provider)
  }
}
