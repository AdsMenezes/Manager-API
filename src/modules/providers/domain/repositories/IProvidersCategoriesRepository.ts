import ProviderCategory from '../../infrastructure/typeorm/entities/ProviderCategory'

export default interface IProvidersCategoriesRepository {
  findById(id: number): Promise<ProviderCategory | undefined>
  findByName(name: string): Promise<ProviderCategory | undefined>
  create(name: string): Promise<ProviderCategory>
}
