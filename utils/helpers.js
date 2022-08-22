/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} data
 * @returns {object} res
 */
 exports.successResponse = function (res, statusCode = 200, message = 'success', data = {}) {
  res.status(statusCode).json({
      status: 'success',
      message,
      data,
  });
};

/**
*
* @param {object} res response object
* @param {number} statusCode
* @param {string} message
* @param {*} errors
* @returns {object} res
*/
exports.errorResponse = function (res, statusCode = 404, message = 'error', errors = {}) {
  res.status(statusCode).json({
      status: 'error',
      message,
      errors,
  });
};

/**
*
* @param {object} res response object
* @param {number} statusCode
* @param {string} message
* @param {*} errors
* @returns {object} res
*/
exports.serverError = function (res, statusCode = 404, message = 'error', errors = null) {
  if(errors != null) {
      Sentry.captureException(errors);
  }

  exports.errorResponse(res, statusCode, message, errors);
};


/*********************************
*  Response Code Helpers
**********************************/
exports.responseCode = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOW: 405,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR:500,
  NOT_IMPLEMENTED: 501
};

exports.extractResponseProperty = (property, parent) => {
  return !parent || !property ? undefined : parent[property];
};

exports.parseResponseValues = function (values, outResponse) {
  const newObject = {};
  Object.keys(outResponse).map((response) => {
    if (!!values[response]) {
      newObject[outResponse[response]] = values[response];
    }
  });

  return newObject;
};


