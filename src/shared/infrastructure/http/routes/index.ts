import { Router } from 'express'

import usersRoutes from '@modules/users/infrastructure/http/routes/users.routes'
import sessionsRoutes from '@modules/users/infrastructure/http/routes/sessions.routes'
import providersRoutes from '@modules/providers/infrastructure/http/routes/providers.routes'
import productsRoutes from '@modules/products/infrastructure/http/routes/products.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/providers', providersRoutes)
routes.use('/products', productsRoutes)

export default routes
