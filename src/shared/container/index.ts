import { container } from 'tsyringe'

import './providers'

import IUsersRepository from '@modules/users/domain/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infrastructure/typeorm/repositories/UsersRepository'

import IProvidersRepository from '@modules/providers/domain/repositories/IProvidersRepository'
import ProvidersRepository from '@modules/providers/infrastructure/typeorm/repositories/ProvidersRepository'

import IProvidersCategoriesRepository from '@modules/providers/domain/repositories/IProvidersCategoriesRepository'
import ProvidersCategoriesRepository from '@modules/providers/infrastructure/typeorm/repositories/ProvidersCategoriesRepository'

import IProductsRepository from '@modules/products/domain/repositories/IProductsRepository'
import ProductsRepository from '@modules/products/infrastructure/typeorm/repositories/ProductsRepository'

import IPurchasesRepository from '@modules/purchases/domain/repositories/IPurchasesRepository'
import PurchasesRepository from '@modules/purchases/infrastructure/typeorm/repositories/PurchasesRepository'

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

// Products
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
)

// Purchases
container.registerSingleton<IPurchasesRepository>(
  'PurchasesRepository',
  PurchasesRepository
)
