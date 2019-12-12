const { _compose } = require('./compose')

/**
 * Compose a single middleware function for Goa out of many.
 * @param {!Array<!Function>} middleware The array with the middleware.
 * @return {!Function}
 */
function compose(middleware) {
  return _compose(middleware)
}

module.exports = compose
