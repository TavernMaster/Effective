import {Pool} from 'pg'

const db = new Pool({
	host: String(process.env.DB_HOST),
    database: String(process.env.DB_DATABASE),
	user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
	max: Number(process.env.DB_MAXCONNECTIONS),
})

export default db