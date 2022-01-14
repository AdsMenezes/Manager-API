import Provider from '@modules/providers/infrastructure/typeorm/entities/Provider'
import IProviderResponseDTO from '../dtos/IProviderResponseDTO'

export default class ProviderMap {
  static toDTO({
    id,
    company,
    cnpj,
    representative,
    phone,
    category,
  }: Provider): IProviderResponseDTO {
    return {
      id,
      company,
      cnpj,
      representative,
      phone,
      category: category.name,
    }
  }
}
