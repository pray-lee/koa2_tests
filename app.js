const Koa = require('koa')
const app = new Koa()
const port = process.env.PORT || 3000

//base
app.use(async(ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>hello world</hi>'
})

app.listen(port, () => {
  console.log(`server is running at port ${port}......`);
})
