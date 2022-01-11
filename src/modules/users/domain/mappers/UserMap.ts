import User from '@modules/users/infrastructure/typeorm/entities/User'
import IUserResponseDTO from '../dtos/IUserResponseDTO'

export default class UserMap {
  static toDTO({ id, name, email, phone, type }: User): IUserResponseDTO {
    return {
      id,
      name,
      email,
      phone,
      type,
    }
  }
}
