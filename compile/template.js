const { _compose } = require('./compose')

/**
 * @methodType {_compose.compose}
 */
function compose(middleware) {
  return _compose(middleware)
}

module.exports = compose
