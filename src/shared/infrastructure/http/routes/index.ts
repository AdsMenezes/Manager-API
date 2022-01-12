import { Router } from 'express'

import usersRoutes from '@modules/users/infrastructure/http/routes/users.routes'
import sessionsRoutes from '@modules/users/infrastructure/http/routes/sessions.routes'
import providersRoutes from '@modules/providers/infrastructure/http/routes/providers.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/providers', providersRoutes)

export default routes
