import { Router } from 'express'

import CreateUserController from '../controllers/CreateUserController'

import CreateUserValidator from '../validators/CreateUserValidator'

const routes = Router()

routes.post('/', CreateUserValidator, CreateUserController.handle)

export default routes
