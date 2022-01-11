import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'
import IUserResponseDTO from '../dtos/IUserResponseDTO'
import UserMap from '../mappers/UserMap'

import { UserType } from '../../infrastructure/typeorm/entities/User'
interface IRequest {
  name: string
  email: string
  password: string
  phone: string
  type: UserType
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute({
    name,
    email,
    password,
    phone,
    type,
  }: IRequest): Promise<IUserResponseDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('User already exists.')
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      phone,
      type,
    })

    return UserMap.toDTO(user)
  }
}
