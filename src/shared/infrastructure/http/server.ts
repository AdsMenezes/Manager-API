import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import swagger from 'swagger-ui-express'

import 'express-async-errors'
import '@shared/infrastructure/typeorm'
import '@shared/container'

import routes from './routes'
import exeptions from './middlewares/exeptions'
import documentation from '../../../swagger.json'

const app = express()

app.use('/docs', swagger.serve, swagger.setup(documentation))
app.use(express.json())
app.use(routes)
app.use(exeptions)

export default app
