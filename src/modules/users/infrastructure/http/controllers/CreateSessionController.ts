import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateSessionService from '@modules/users/domain/services/CreateSessionService'

class CreateSessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const createSession = container.resolve(CreateSessionService)

    const session = await createSession.execute({
      email,
      password,
    })

    return response.json(session)
  }
}

export default new CreateSessionController()
