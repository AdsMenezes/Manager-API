import { container } from 'tsyringe'

import './providers'

import IUsersRepository from '@modules/users/domain/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infrastructure/typeorm/repositories/UsersRepository'

import IProvidersRepository from '@modules/providers/domain/repositories/IProvidersRepository'
import ProvidersRepository from '@modules/providers/infrastructure/typeorm/repositories/ProvidersRepository'

import IProvidersCategoriesRepository from '@modules/providers/domain/repositories/IProvidersCategoriesRepository'
import ProvidersCategoriesRepository from '@modules/providers/infrastructure/typeorm/repositories/ProvidersCategoriesRepository'

// Users
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

// Providers
container.registerSingleton<IProvidersRepository>(
  'ProvidersRepository',
  ProvidersRepository
)
container.registerSingleton<IProvidersCategoriesRepository>(
  'ProvidersCategoriesRepository',
  ProvidersCategoriesRepository
)
