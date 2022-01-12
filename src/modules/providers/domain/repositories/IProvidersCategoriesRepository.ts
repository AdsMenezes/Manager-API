import ProviderCategory from '../../infrastructure/typeorm/entities/ProviderCategory'

export default interface IProvidersCategoriesRepository {
  findByName(name: string): Promise<ProviderCategory | undefined>
  create(name: string): Promise<ProviderCategory>
}
