import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { ENVIRONMENT, HOST, PORT } from './config.js'

const app = express()

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
    console.log(`Server running! Environment ${ENVIRONMENT} in ${ENVIRONMENT === 'production' ? HOST : HOST}:${PORT}`)
})