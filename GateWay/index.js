import gateway from 'fast-gateway'
import dotenv from 'dotenv'
dotenv.config()

const server = gateway({
	routes: [
		{
			prefix: 'api/user',
			target: process.env.USER_URL,
		},
		{
			prefix: 'api/history',
			target: process.env.HISTORY_URL,
		},
	],
})

server.start(process.env.PORT || 3001)
