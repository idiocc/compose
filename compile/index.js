const { _compose } = require('./compose')

/**
 * Compose a single middleware function for Goa out of many.
 * @param {!_compose.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function compose(config) {
  return _compose(config)
}

module.exports = compose

/* typal types/index.xml namespace */
/**
 * @typedef {_compose.Config} Config `＠record` Options for the program.
 * @typedef {Object} _compose.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
