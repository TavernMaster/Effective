import express from 'express'
import userHistoryController from '../Controllers/userHistory'

const userHistoryRouter = express.Router()

userHistoryRouter.get('/*', userHistoryController.getUserHistory)

export default userHistoryRouter
