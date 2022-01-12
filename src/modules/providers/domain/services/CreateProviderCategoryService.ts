import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IProvidersCategoriesRepository from '../repositories/IProvidersCategoriesRepository'
import IProviderCategoryResponseDTO from '../dtos/IProviderCategoryResponseDTO'
import ProviderCategoryMap from '../mappers/ProviderCategoryMap'

@injectable()
export default class CreateProviderCategoryService {
  constructor(
    @inject('ProvidersCategoriesRepository')
    private readonly providersCategoriesRepository: IProvidersCategoriesRepository
  ) {}

  public async execute(name: string): Promise<IProviderCategoryResponseDTO> {
    const providerCategoryAlreadyExists =
      await this.providersCategoriesRepository.findByName(name)

    if (providerCategoryAlreadyExists) {
      throw new AppError('Provider category already exists.')
    }

    const category = await this.providersCategoriesRepository.create(name)

    return ProviderCategoryMap.toDTO(category)
  }
}
