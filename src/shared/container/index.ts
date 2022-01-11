import { container } from 'tsyringe'

import IUsersRepository from '@modules/users/domain/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infrastructure/typeorm/repositories/UsersRepository'

// Users
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
