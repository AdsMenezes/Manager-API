import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateProductService from '@modules/products/domain/services/CreateProductService'

class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, cost, price, amount, provider_id } =
      request.body

    const createProduct = container.resolve(CreateProductService)

    const product = await createProduct.execute({
      title,
      description,
      cost,
      price,
      amount,
      image: request.file?.filename,
      provider_id,
    })

    return response.status(201).json(product)
  }
}

export default new CreateProductController()
