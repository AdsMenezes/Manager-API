import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreatePurchaseService from '@modules/purchases/domain/services/CreatePurchaseService'

class CreatePurchaseController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { product_id, amount } = request.body

    const createPurchase = container.resolve(CreatePurchaseService)

    const purchase = await createPurchase.execute({
      product_id,
      amount,
    })

    return response.status(201).json(purchase)
  }
}

export default new CreatePurchaseController()
