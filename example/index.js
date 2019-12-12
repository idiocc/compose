import Goa from '@goa/koa'
import rqt from 'rqt'
import compose from '../src'

const goa = new Goa()

const composed = compose([
  async (ctx, next) => {
    ctx.body = 'hello'
    await next()
  },
  async (ctx) => {
    ctx.body += ' world'
  },
])

goa.use(composed)

goa.listen(async function() {
  const url = `http://127.0.0.1:${this.address().port}`
  const res = await rqt(url)
  console.log(res)
  this.close()
})