import AppError from '@shared/errors/AppError'

import FakeProvidersRepository from '../repositories/fakes/FakeProvidersRepository'
import FakeProvidersCategoriesRepository from '../repositories/fakes/FakeProvidersCategoriesRepository'
import CreateProviderService from './CreateProviderService'

let fakeProvidersRepository: FakeProvidersRepository
let fakeProvidersCategoriesRepository: FakeProvidersCategoriesRepository
let createProvider: CreateProviderService

describe('Create Provider', () => {
  beforeEach(() => {
    fakeProvidersRepository = new FakeProvidersRepository()
    fakeProvidersCategoriesRepository = new FakeProvidersCategoriesRepository()

    createProvider = new CreateProviderService(
      fakeProvidersRepository,
      fakeProvidersCategoriesRepository
    )
  })

  it('should be able to create a provider', async () => {
    const category = await fakeProvidersCategoriesRepository.create('Category')

    const provider = await createProvider.execute({
      company: 'John Company',
      cnpj: 'cnpj',
      category_id: category.id,
      representative: 'John Doe',
      phone: 'phone',
    })

    expect(provider).toHaveProperty('id')
  })

  it('should not be able to create a provider with a non-existent category', async () => {
    await expect(
      createProvider.execute({
        company: 'John Company',
        cnpj: 'cnpj',
        category_id: 1,
        representative: 'John Doe',
        phone: 'phone',
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a provider with same cnpj as another provider', async () => {
    const category = await fakeProvidersCategoriesRepository.create('Category')

    await fakeProvidersRepository.create({
      company: 'John Company',
      cnpj: 'cnpj-already-exists',
      category_id: category.id,
      representative: 'John Doe',
      phone: 'phone',
    })

    await expect(
      createProvider.execute({
        company: 'John Company',
        cnpj: 'cnpj-already-exists',
        category_id: category.id,
        representative: 'John Doe',
        phone: 'phone',
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
