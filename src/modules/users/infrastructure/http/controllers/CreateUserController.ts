import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUserService from '@modules/users/domain/services/CreateUserService'

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, phone, type } = request.body

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({
      name,
      email,
      password,
      phone,
      type,
    })

    return response.status(201).json(user)
  }
}

export default new CreateUserController()
