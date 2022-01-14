import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateProviderService from '@modules/providers/domain/services/CreateProviderService'

class CreateProviderController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { company, cnpj, category_id, representative, phone } = request.body

    const createProvider = container.resolve(CreateProviderService)

    const provider = await createProvider.execute({
      company,
      cnpj,
      category_id,
      representative,
      phone,
    })

    return response.status(201).json(provider)
  }
}

export default new CreateProviderController()
