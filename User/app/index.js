import express from 'express'
import 'dotenv/config'
import userRouter from './routes/user'
import './db'
import errorHandler from './Middlewares/errorHandler'
const port = +process.env.PORT || 3002


const app = express()

app.use(express.json())

app.use('/', userRouter)

app.use(errorHandler)

app.listen(port, () => console.log('Server started on port:', port))

export default app