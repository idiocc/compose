import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import compose from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await compose({
      text: this.input,
    })
    return res
  },
  context: Context,
})