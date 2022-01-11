import { injectable, inject } from 'tsyringe'
import { sign } from 'jsonwebtoken'

import AppError from '@shared/errors/AppError'

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'
import IUserResponseDTO from '../dtos/IUserResponseDTO'
import UserMap from '../mappers/UserMap'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: IUserResponseDTO
  token: string
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password is incorrect.')
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password
    )

    if (!passwordMatch) {
      throw new AppError('Email or password is incorrect.')
    }

    const token = sign({ type: user.type }, `${process.env.JWT_SECRET}`, {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRED_IN,
    })

    return { user: UserMap.toDTO(user), token }
  }
}
