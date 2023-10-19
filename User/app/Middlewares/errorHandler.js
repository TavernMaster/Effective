import ApiError from '../Utils/apiError'

const messages = {
	400: 'Bad Request',
	401: 'Unauthorized',
}

export default function errorHandler(err, req, res, next) {
	if (err instanceof ApiError) {
		if (process.env.NODE_ENV == 'development') console.error(err)

		return res.status(err.code).json(
			process.env.NODE_ENV == 'development'
				? err.message
				: {
						status: 'error',
						message: messages[err.code],
				  }
		)
	}

	return res.status(500).json({
		status: 'error',
		message: err.message,
	})
}
