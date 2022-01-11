import { UserType } from '../../infrastructure/typeorm/entities/User'

export default interface ICreateUserDTO {
  name: string
  email: string
  password: string
  phone: string
  type: UserType
}
