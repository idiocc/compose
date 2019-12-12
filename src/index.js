import { c } from 'erte'

/**
 * Compose a single middleware function for Goa out of many.
 * @param {!_compose.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function compose(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('@goa/compose called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('..').Config} _compose.Config
 */
