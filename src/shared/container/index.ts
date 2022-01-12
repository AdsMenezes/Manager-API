import { container } from 'tsyringe'

import './providers'

import IUsersRepository from '@modules/users/domain/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infrastructure/typeorm/repositories/UsersRepository'

import IProvidersCategoriesRepository from '@modules/providers/domain/repositories/IProvidersCategoriesRepository'
import ProvidersCategoriesRepository from '@modules/providers/infrastructure/typeorm/repositories/ProvidersCategoriesRepository'

// Users
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

// Providers
container.registerSingleton<IProvidersCategoriesRepository>(
  'ProvidersCategoriesRepository',
  ProvidersCategoriesRepository
)
