import AppError from '@shared/errors/AppError'

import FakeProductsRepository from '@modules/products/domain/repositories/fakes/FakeProductsRepository'
import FakePurchasesRepository from '../repositories/fakes/FakePurchasesRepository'
import CreatePurchaseService from './CreatePurchaseService'

let fakeProductsRepository: FakeProductsRepository
let fakePurchasesRepository: FakePurchasesRepository

let createPurchase: CreatePurchaseService

describe('Create Purchase', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository()
    fakePurchasesRepository = new FakePurchasesRepository()

    createPurchase = new CreatePurchaseService(
      fakeProductsRepository,
      fakePurchasesRepository
    )
  })

  it('should be able to create a purchase', async () => {
    const product = await fakeProductsRepository.create({
      title: 'Product',
      description: 'Product description',
      cost: 250.5,
      price: 300.5,
      amount: 5,
      image: 'image-file',
      provider_id: 'provider',
    })

    const purchase = await createPurchase.execute({
      product_id: product.id,
      amount: 5,
    })

    expect(purchase).toHaveProperty('id')
    expect(purchase.price_total).toBe(1252.5)
  })

  it('should not be able to create a purchase with non-existent product', async () => {
    await expect(
      createPurchase.execute({
        product_id: 'non-existent-product',
        amount: 5,
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
