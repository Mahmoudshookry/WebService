/* eslint-disable max-len */
class customError extends Error {
    constructor(status, code, message, details = []) {
      super(message);

      this.status = status;
      this.code = code;
      this.message = message;
      this.details = details;
    }
}

const createError = (code, message, details) => {
  return class CreatedError extends CustomError {
    constructor() { super(code, message, details) }
  }
}

// defined errors
const errors = {
  APP_ERR_AUTHENTICATION: createError(401, 'AUTHENTICATION_REQUIRED', 'You need to login'),
  APP_ERR_PERMISSION: createError(401, 'PERMISSION_REQUIRED', 'You need a permission to access this resource'),
}


module.exports = {
    customError,
    errors,
}