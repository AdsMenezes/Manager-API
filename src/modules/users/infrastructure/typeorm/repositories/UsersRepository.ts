import { Repository, getRepository } from 'typeorm'

import User from '../entities/User'
import IUsersRepository from '@modules/users/domain/repositories/IUsersRepository'
import ICreateUserDTO from '@modules/users/domain/dtos/ICreateUserDTO'

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    })

    return user
  }

  public async create({
    name,
    email,
    password,
    phone,
    type,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      phone,
      type,
    })

    await this.repository.save(user)

    return user
  }
}
