import ProviderCategory from '@modules/providers/infrastructure/typeorm/entities/ProviderCategory'
import IProviderCategoryResponseDTO from '../dtos/IProviderCategoryResponseDTO'

export default class ProviderCategoryMap {
  static toDTO({ id, name }: ProviderCategory): IProviderCategoryResponseDTO {
    return {
      id,
      name,
    }
  }
}
