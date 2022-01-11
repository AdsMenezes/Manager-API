import AppError from '@shared/errors/AppError'

import { UserType } from '../../infrastructure/typeorm/entities/User'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUserService'

let fakeUsersRepository: FakeUsersRepository
let createUser: CreateUserService

describe('Create User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    createUser = new CreateUserService(fakeUsersRepository)
  })

  it('should be able to create a user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@exemple.com',
      password: '12345',
      phone: '11 99999-9999',
      type: UserType.OPERATOR,
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a user with same email from another', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@exemple.com',
      password: '12345',
      phone: '(11) 99999-9999',
      type: UserType.OPERATOR,
    })

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'john@exemple.com',
        password: '12345',
        phone: '(11) 99999-9999',
        type: UserType.OPERATOR,
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
