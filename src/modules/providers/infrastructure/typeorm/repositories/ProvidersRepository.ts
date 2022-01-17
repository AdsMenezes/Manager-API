import { Repository, getRepository } from 'typeorm'

import Provider from '../entities/Provider'
import IProvidersRepository from '@modules/providers/domain/repositories/IProvidersRepository'
import ICreateProviderDTO from '@modules/providers/domain/dtos/ICreateProviderDTO'

export default class ProvidersRepository implements IProvidersRepository {
  private repository: Repository<Provider>

  constructor() {
    this.repository = getRepository(Provider)
  }

  public async findById(id: string): Promise<Provider | undefined> {
    const provider = await this.repository.findOne(id)

    return provider
  }

  public async findByCnpj(cnpj: string): Promise<Provider | undefined> {
    const provider = await this.repository.findOne({
      where: {
        cnpj,
      },
    })

    return provider
  }

  public async create({
    company,
    cnpj,
    category_id,
    representative,
    phone,
  }: ICreateProviderDTO): Promise<Provider> {
    const provider = this.repository.create({
      company,
      cnpj,
      category_id,
      representative,
      phone,
    })

    await this.repository.save(provider)

    return provider
  }
}
