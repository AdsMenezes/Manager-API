import { injectable, inject } from 'tsyringe'

import IProvidersCategoriesRepository from '../repositories/IProvidersCategoriesRepository'

@injectable()
export default class CreateProviderCategoryService {
  constructor(
    @inject('ProvidersCategoriesRepository')
    private readonly providersCategoriesRepository: IProvidersCategoriesRepository
  ) {}

  public async execute(name: string): Promise<void> {
    console.log('Not implemented')
  }
}
