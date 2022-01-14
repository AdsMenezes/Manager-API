import ICreateProviderDTO from '../dtos/ICreateProviderDTO'

export default interface IProvidersRepository {
  create(data: ICreateProviderDTO): Promise<void>
}
