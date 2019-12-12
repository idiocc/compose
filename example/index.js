import compose from '../src'

(async () => {
  const res = await compose({
    text: 'example',
  })
  console.log(res)
})()