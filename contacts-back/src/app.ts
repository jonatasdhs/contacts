import 'express-async-errors'
import express, { Application } from 'express'
import { handleError } from './errors'
import { userRoutes } from './routes/user.routes'
import cors from 'cors'
import { loginRoutes } from './routes/login.routes'
import { contactsRoutes } from './routes/contact.routes'

export const app: Application = express()

app.use(cors())

app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactsRoutes)

app.use(handleError)
