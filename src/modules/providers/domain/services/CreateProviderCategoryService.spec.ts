import AppError from '@shared/errors/AppError'

import FakeProvidersCategoriesRepository from '../repositories/fakes/FakeProvidersCategoriesRepository'
import CreateProviderCategoryService from './CreateProviderCategoryService'

let fakeProvidersCategoriesRepository: FakeProvidersCategoriesRepository
let createProviderCategory: CreateProviderCategoryService

describe('Provider Category', () => {
  beforeEach(() => {
    fakeProvidersCategoriesRepository = new FakeProvidersCategoriesRepository()

    createProviderCategory = new CreateProviderCategoryService(
      fakeProvidersCategoriesRepository
    )
  })

  it('should be able to create a provider category', async () => {
    const category = await createProviderCategory.execute('Category')

    expect(category).toHaveProperty('id')
  })

  it('should not be able to crate a provider category with same name from another', async () => {
    await fakeProvidersCategoriesRepository.create('Category')

    await expect(
      createProviderCategory.execute('Category')
    ).rejects.toBeInstanceOf(AppError)
  })
})
