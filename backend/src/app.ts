import express from 'express'
import { habitsRouter } from './routes/habits'
import { userRouter } from './routes/users'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

const app = express()
app.use(cors())
app.options('*', cors())
app.use(express.json())

app.use(habitsRouter)
app.use(userRouter)

export { app }