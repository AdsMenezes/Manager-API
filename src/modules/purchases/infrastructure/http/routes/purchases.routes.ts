import { Router } from 'express'

import ensureAuthenticated from '@shared/infrastructure/http/middlewares/ensureAuthenticated'
import ensureAdministrator from '@shared/infrastructure/http/middlewares/ensureAdministrator'

import CreatePurchaseController from '../controllers/CreatePurchaseController'

import CreatePurchaseValidator from '../validators/CreatePurchaseValidator'

const routes = Router()

routes.use(ensureAuthenticated)
routes.use(ensureAdministrator)

routes.post('/', CreatePurchaseValidator, CreatePurchaseController.handle)

export default routes
