import ProviderCategory from '@modules/providers/infrastructure/typeorm/entities/ProviderCategory'
import IProvidersCategoriesRepository from '../IProvidersCategoriesRepository'

export default class FakeProvidersCategoriesRepository
  implements IProvidersCategoriesRepository
{
  private categories: ProviderCategory[] = []

  public async findByName(name: string): Promise<ProviderCategory | undefined> {
    return this.categories.find(category => category.name === name)
  }

  public async create(name: string): Promise<ProviderCategory> {
    const category = new ProviderCategory()

    Object.assign(category, {
      id: Date.now(),
      name,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.categories.push(category)

    return category
  }
}
