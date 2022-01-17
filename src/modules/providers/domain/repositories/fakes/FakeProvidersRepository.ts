import { v4 as uuidv4 } from 'uuid'

import Provider from '@modules/providers/infrastructure/typeorm/entities/Provider'
import IProvidersRepository from '../IProvidersRepository'
import ICreateProviderDTO from '../../dtos/ICreateProviderDTO'

export default class FakeProvidersRepository implements IProvidersRepository {
  private providers: Provider[] = []

  public async findById(id: string): Promise<Provider | undefined> {
    return this.providers.find(provider => provider.id === id)
  }

  public async findByCnpj(cnpj: string): Promise<Provider | undefined> {
    return this.providers.find(provider => provider.cnpj === cnpj)
  }

  public async create({
    company,
    cnpj,
    category_id,
    representative,
    phone,
  }: ICreateProviderDTO): Promise<Provider> {
    const provider = new Provider()

    Object.assign(provider, {
      id: uuidv4(),
      company,
      cnpj,
      category_id,
      representative,
      phone,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.providers.push(provider)

    return provider
  }
}
