import { v4 as uuidv4 } from 'uuid'

import User from '@modules/users/infrastructure/typeorm/entities/User'
import IUsersRepository from '../IUsersRepository'
import ICreateUserDTO from '../../dtos/ICreateUserDTO'

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email)
  }

  public async create({
    name,
    email,
    password,
    phone,
    type,
  }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      id: uuidv4(),
      name,
      email,
      password,
      phone,
      type,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.users.push(user)

    return user
  }
}
