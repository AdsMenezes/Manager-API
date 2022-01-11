import { UserType } from '../../infrastructure/typeorm/entities/User'

export default interface IUserResponseDTO {
  id: string
  name: string
  email: string
  phone: string
  type: UserType
}
