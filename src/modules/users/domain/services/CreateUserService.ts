import { injectable, inject } from 'tsyringe'
import { hash } from 'bcrypt'

import AppError from '@shared/errors/AppError'

import User, { UserType } from '../../infrastructure/typeorm/entities/User'
import IUsersRepository from '../repositories/IUsersRepository'

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
    private readonly usersRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    email,
    password,
    phone,
    type,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('User already exists.')
    }

    const hashedPassword = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      phone,
      type,
    })

    return user
  }
}
