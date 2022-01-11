import AppError from '@shared/errors/AppError'

import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUserService'

import { UserType } from '../../infrastructure/typeorm/entities/User'

let fakeHashProvider: FakeHashProvider
let fakeUsersRepository: FakeUsersRepository
let createUser: CreateUserService

describe('Create User', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider()
    fakeUsersRepository = new FakeUsersRepository()

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider)
  })

  it('should be able to create a user', async () => {
    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash')

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@exemple.com',
      password: 'password',
      phone: 'phone',
      type: UserType.OPERATOR,
    })

    expect(generateHash).toHaveBeenCalledWith('password')
    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a user with same email from another', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@exemple.com',
      password: 'password',
      phone: 'phone',
      type: UserType.OPERATOR,
    })

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'john@exemple.com',
        password: 'password',
        phone: 'phone',
        type: UserType.OPERATOR,
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
