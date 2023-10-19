class ApiError extends Error {
    code
    error

    constructor(code, messageOrError, error) {
        messageOrError && typeof messageOrError == 'string' ? super(messageOrError) : super(''), this.error = messageOrError
        this.code = code
        if (error) this.error = error
    }
}

export default ApiError

export function BadRequest(messageOrError, error) {
    return new ApiError(400, messageOrError, error)
}
 
export function Unauthorized(messageOrError, error) {
    return new ApiError(401, messageOrError, error)
}