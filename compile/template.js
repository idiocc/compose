const { _compose } = require('./compose')

/**
 * @methodType {_compose.compose}
 */
function compose(config) {
  return _compose(config)
}

module.exports = compose

/* typal types/index.xml namespace */
