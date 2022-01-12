import { Repository, getRepository } from 'typeorm'

import ProviderCategory from '../entities/ProviderCategory'
import IProvidersCategoriesRepository from '@modules/providers/domain/repositories/IProvidersCategoriesRepository'

export default class ProvidersCategoriesRepository
  implements IProvidersCategoriesRepository
{
  private repository: Repository<ProviderCategory>

  constructor() {
    this.repository = getRepository(ProviderCategory)
  }

  public async findByName(name: string): Promise<ProviderCategory | undefined> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    })

    return category
  }

  public async create(name: string): Promise<ProviderCategory> {
    const category = this.repository.create({ name })

    await this.repository.save(category)

    return category
  }
}
