import AppError from '@shared/errors/AppError'

import FakeHashProvider from '@shared/container/providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateSessionService from './CreateSessionService'

import { UserType } from '../../infrastructure/typeorm/entities/User'

let fakeHashProvider: FakeHashProvider
let fakeUsersRepository: FakeUsersRepository
let createSession: CreateSessionService

describe('Create Session', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider()
    fakeUsersRepository = new FakeUsersRepository()

    createSession = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProvider
    )
  })

  it('should be able to create user session', async () => {
    const compareHash = jest.spyOn(fakeHashProvider, 'compareHash')

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      phone: 'phone',
      type: UserType.OPERATOR,
    })

    const session = await createSession.execute({
      email: user.email,
      password: user.password,
    })

    expect(compareHash).toHaveBeenCalled()
    expect(session).toHaveProperty('token')
  })

  it('should not be able to create user session with non-existent user', async () => {
    await expect(
      createSession.execute({
        email: 'non-existent-user',
        password: 'password',
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create user session with wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      phone: 'phone',
      type: UserType.OPERATOR,
    })

    await expect(
      createSession.execute({
        email: user.email,
        password: 'wrong-password',
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
