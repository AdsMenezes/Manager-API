import { Router } from 'express'

import ensureAuthenticated from '@shared/infrastructure/http/middlewares/ensureAuthenticated'
import ensureAdministrator from '@shared/infrastructure/http/middlewares/ensureAdministrator'

import CreateUserController from '../controllers/CreateUserController'

import CreateUserValidator from '../validators/CreateUserValidator'

const routes = Router()

routes.use(ensureAuthenticated)
routes.use(ensureAdministrator)

routes.post('/', CreateUserValidator, CreateUserController.handle)

export default routes
