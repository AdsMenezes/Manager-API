import AppError from '@shared/errors/AppError'

import FakeProvidersRepository from '@modules/providers/domain/repositories/fakes/FakeProvidersRepository'
import FakePurchasesRepository from '@modules/purchases/domain/repositories/fakes/FakePurchasesRepository'
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository'
import CreateProductService from './CreateProductService'

let fakeProvidersRepository: FakeProvidersRepository
let fakePurchasesRepository: FakePurchasesRepository
let fakeProductsRepository: FakeProductsRepository

let createProduct: CreateProductService

describe('Create Product', () => {
  beforeEach(() => {
    fakeProvidersRepository = new FakeProvidersRepository()
    fakePurchasesRepository = new FakePurchasesRepository()
    fakeProductsRepository = new FakeProductsRepository()

    createProduct = new CreateProductService(
      fakeProvidersRepository,
      fakePurchasesRepository,
      fakeProductsRepository
    )
  })

  it('should be able to create a product', async () => {
    const createPurchase = jest.spyOn(fakePurchasesRepository, 'create')

    const provider = await fakeProvidersRepository.create({
      company: 'John Company',
      cnpj: 'cnpj',
      category_id: 1,
      representative: 'John Doe',
      phone: 'phone',
    })

    const product = await createProduct.execute({
      title: 'Product',
      description: 'Product description',
      cost: 1.5,
      price: 2.0,
      amount: 5,
      provider_id: provider.id,
    })

    expect(createPurchase).toBeCalled()
    expect(product).toHaveProperty('id')
  })

  it('should not be able to create a product with non-existent provider', async () => {
    await expect(
      createProduct.execute({
        title: 'Product',
        description: 'Product description',
        cost: 1.5,
        price: 2.0,
        amount: 5,
        provider_id: 'non-existent-provider',
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
