import { Router } from 'express'

import ensureAuthenticated from '@shared/infrastructure/http/middlewares/ensureAuthenticated'
import ensureAdministrator from '@shared/infrastructure/http/middlewares/ensureAdministrator'

import CreateProviderCategoryController from '../controllers/CreateProviderCategoryController'

import CreateProviderCategoryValidator from '../validators/CreateProviderCategoryValidator'

const routes = Router()

routes.use(ensureAuthenticated)
routes.use(ensureAdministrator)

routes.post(
  '/categories',
  CreateProviderCategoryValidator,
  CreateProviderCategoryController.handle
)

export default routes
