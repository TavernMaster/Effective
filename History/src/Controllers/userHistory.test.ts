import request from 'supertest'
import app from '../index'

describe('Endpoints', () => {
	it('Should get all userHistory', async () => {
		const res = await request(app)
		.get(`/user/?id=${1}&page=${1}`)
		expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
	})
})
