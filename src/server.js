import express from 'express'
import { ENVIRONMENT, HOST, PORT } from './config.js'

import logger from './middlewares/logger.js'
import errorHandler from './middlewares/errorHandler.js'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

import welcome from './controllers/welcome.js'
import routeNotFounded from './controllers/routeNotFounded.js'

const app = express()

app.use(logger)
app.use(express.json())

app.get('/', welcome)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('*', routeNotFounded)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running! Environment ${ENVIRONMENT} in ${ENVIRONMENT === 'production' ? HOST : HOST}:${PORT}`)
})