import { Router } from 'express'

import usersRoutes from '@modules/users/infrastructure/http/routes/users.routes'
import sessionsRoutes from '@modules/users/infrastructure/http/routes/sessions.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)

export default routes
