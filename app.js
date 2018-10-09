const Koa = require('koa')
const app = new Koa()
const port = process.env.PORT || 3000


//use middleware
app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1 style="color:#ff5252">hello koa!</h1>'
})
app.listen(port, () => {
  `server is running at port ${port}`
})
