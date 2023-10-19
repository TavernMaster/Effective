import request from 'supertest'
import app from '../index.js'

let userId

describe('Endpoints', () => {
	it('Should create a new user', async () => {
		const res = await request(app)
        .post('/')
        .send({
			login: '123',
		})
        userId = res.body.id
		expect(res.statusCode).toBe(200)
        expect(res.body.id).toBeDefined()
        expect(res.body.login).toBe('123')
	})
    
    it('Should edit user', async () => {
		const res = await request(app)
        .put('/' + userId)
        .send({
			login: '123',
		})
		expect(res.statusCode).toBe(200)
		expect(res.body.id).toBeDefined()
        expect(res.body.login).toBe('123')
	})

	it('Should get all users', async () => {
		const res = await request(app)
		.get('/')
		expect(res.statusCode).toBe(200)
	})
})
