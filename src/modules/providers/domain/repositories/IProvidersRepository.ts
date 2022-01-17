import Provider from '../../infrastructure/typeorm/entities/Provider'
import ICreateProviderDTO from '../dtos/ICreateProviderDTO'
export default interface IProvidersRepository {
  findById(id: string): Promise<Provider | undefined>
  findByCnpj(cnpj: string): Promise<Provider | undefined>
  create(data: ICreateProviderDTO): Promise<Provider>
}
