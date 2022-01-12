import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateProviderCategoryService from '@modules/providers/domain/services/CreateProviderCategoryService'

class CreateProviderCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createProviderCategory = container.resolve(
      CreateProviderCategoryService
    )

    const category = await createProviderCategory.execute(name)

    return response.status(201).json(category)
  }
}

export default new CreateProviderCategoryController()
