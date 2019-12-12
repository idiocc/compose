import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import compose from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof compose, 'function')
  },
  async 'calls package without error'() {
    await compose()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await compose({
      text,
    })
    ok(res, text)
  },
}

export default T