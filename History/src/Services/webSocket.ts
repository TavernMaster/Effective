import {WebSocketServer} from 'ws'
import db from '../db'

const wss = new WebSocketServer({port: Number(process.env.WSS_PORT)})

wss.on('connection', ws => {
	ws.on('message', m => {
		const message = JSON.parse(m.toString())

		console.log(message)
		
		if (!message.userId || !message.action || !message.data) return ws.send('bad message')

		db.query('INSERT INTO users (user_id, action, data) VALUES ($1, $2, $3)', [message.userId, message.action, JSON.stringify(message.data)])
	})

	ws.on('error', e => ws.send(1))
})
