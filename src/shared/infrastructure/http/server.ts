import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import swagger from 'swagger-ui-express'

import docs from '../../../swagger.json'

import routes from './routes'

import '@shared/infrastructure/typeorm'
import '@shared/container'

const app = express()

app.use('/docs', swagger.serve, swagger.setup(docs))
app.use(express.json())
app.use(routes)

export default app
