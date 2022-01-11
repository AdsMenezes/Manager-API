import { Router } from 'express'

import usersRoutes from '@modules/users/infrastructure/http/routes/users.routes'

const routes = Router()

routes.use('/users', usersRoutes)

export default routes
