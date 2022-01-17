import IProductsRepository from '../IProductsRepository'

export default class FakeProductsRepository implements IProductsRepository {
  public async create(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
