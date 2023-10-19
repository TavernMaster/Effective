import express from 'express'
import 'dotenv/config'
import './db'
import userHistoryRouter from './Routers/userHistory'
import './Services/webSocket'

console.log(process.env.PORT)
const port = process.env.PORT || 3002

const app = express()

app.use(express.json())

app.use('/user', userHistoryRouter)

app.listen(port, () => console.log('Server started on port:', port))

export default app