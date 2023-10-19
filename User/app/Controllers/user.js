import historySend from '../Services/HistorySocket'
import {BadRequest} from '../Utils/apiError'
import db from '../db'

class UserController {
	async createUser(req, res, next) {
		try {
			const {login} = req.body
			const oldUser = await db.query('SELECT * FROM users WHERE login =$1', [login])
			if (oldUser.rows[0]) throw BadRequest('Пользователь с таким логином уже существует')

			await db.query('INSERT INTO users (login) VALUES ($1)', [login])

			const result = await db.query('SELECT * FROM users WHERE login =$1', [login])

			historySend(result.rows[0].id, 'CreateUser', result.rows[0])

			res.json(result.rows[0])
		} catch (e) {
			next(e)
		}
	}

	async updateUser(req, res, next) {
		try {
			const {id} = req.params
			const {login} = req.body

			const checkDouble = await db.query('SELECT * FROM users WHERE login = $1', [login])

			if (checkDouble.rows.length) throw BadRequest('Пользователь с таким логином уже существует')

			const from = await db.query('SELECT * FROM users WHERE id = $1', [id])

			await db.query('UPDATE users SET login = $1 WHERE id = $2', [login, id])

			const to = await db.query('SELECT * FROM users WHERE id = $1', [id])

			historySend(+id, 'EditUser', {from: from.rows[0], to: to.rows[0]})

			res.json({id, login})
		} catch (e) {
			next(e)
		}
	}

	async getUsers(req, res, next) {
		try {
			const users = await db.query('SELECT * FROM users')
			res.json(users.rows)
		} catch (e) {
			next(e)
		}
	}
}

const userController = new UserController()

export default userController
