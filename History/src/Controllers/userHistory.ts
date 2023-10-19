import {Request, Response} from 'express'
import db from '../db'
const offset = 10

class HistoryController {
	async getUserHistory(req: Request, res: Response) {
		try {
			let {id, page} = req.query
			console.log(id, page)
			if (!page) page = '0'
			if (+page > 0) page = `${+page - 1}`

			const history = await db.query('SELECT * FROM users WHERE user_id = $1 LIMIT $2 OFFSET $3', [id, offset, +page * offset])
			res.json(history.rows)
		} catch (e) {
			res.status(400).end()
		}
	}
}

const historyController = new HistoryController()

export default historyController
