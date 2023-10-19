import express from 'express'
import userController from '../Controllers/user'

const userRouter = express.Router()

userRouter.post('/', userController.createUser)
userRouter.put('/:id', userController.updateUser)
userRouter.get('/', userController.getUsers)

export default userRouter
