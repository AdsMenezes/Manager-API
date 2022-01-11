import { Router } from 'express'

import CreateSessionController from '../controllers/CreateSessionController'

import CreateSessionValidator from '../validators/CreateSessionValidator'

const routes = Router()

routes.post('/', CreateSessionValidator, CreateSessionController.handle)

export default routes
