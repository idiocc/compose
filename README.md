# @goa/compose

[![npm version](https://badge.fury.io/js/%40goa%2Fcompose.svg)](https://www.npmjs.com/package/@goa/compose)

`@goa/compose` is Compose a single middleware function for Goa out of many.

```sh
yarn add @goa/compose
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`compose(middleware: !Array<!Function>): !Function`](#composemiddleware-arrayfunction-function)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import compose from '@goa/compose'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>compose</ins>(</code><sub><br/>&nbsp;&nbsp;`middleware: !Array<!Function>,`<br/></sub><code>): <i>!Function</i></code>
Compose a single middleware function for Goa out of many.

 - <kbd><strong>middleware*</strong></kbd> <em><code>!Array&lt;!Function&gt;</code></em>: The array with the middleware.

```js
import Goa from '@goa/koa'
import rqt from 'rqt'
import compose from '@goa/compose'

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
```
```
hello world
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

[Original work](https://www.npmjs.com/package/koa-compose) by dead-horse under MIT license. Copy of the license is not included as not found in the original package.

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="idiocc"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2019</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>