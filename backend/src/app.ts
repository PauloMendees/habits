import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors)

export { app }