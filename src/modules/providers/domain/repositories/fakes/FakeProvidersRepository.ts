import IProvidersRepository from '../IProvidersRepository'
import ICreateProviderDTO from '../../dtos/ICreateProviderDTO'

export default class FakeProvidersRepository implements IProvidersRepository {
  public async create({
    company,
    cnpj,
    category_id,
    representative,
    phone,
  }: ICreateProviderDTO): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
