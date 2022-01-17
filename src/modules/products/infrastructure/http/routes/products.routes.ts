import { Router } from 'express'
import multer from 'multer'
import configUpload from '@config/upload'

import ensureAuthenticated from '@shared/infrastructure/http/middlewares/ensureAuthenticated'
import ensureAdministrator from '@shared/infrastructure/http/middlewares/ensureAdministrator'

import CreateProductController from '../controllers/CreateProductController'

import CreateProductValidator from '../validators/CreateProductValidator'

const routes = Router()
const upload = multer(configUpload)

routes.use(ensureAuthenticated)
routes.use(ensureAdministrator)

routes.post(
  '/',
  upload.single('image'),
  CreateProductValidator,
  CreateProductController.handle
)

export default routes
