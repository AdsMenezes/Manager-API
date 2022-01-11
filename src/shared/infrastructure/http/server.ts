import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'

import routes from './routes'

import '@shared/infrastructure/typeorm'
import '@shared/container'

const app = express()

app.use(express.json())
app.use(routes)

export default app
