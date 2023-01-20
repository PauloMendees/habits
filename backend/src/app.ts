import fastify from 'fastify'
import cors from '@fastify/cors'
import { habitsRoutes } from './routes/habits'

const app = fastify()
app.register(cors)
app.register(habitsRoutes)

export { app }