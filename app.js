const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const port = process.env.PORT || 3003

// i just dont wanna lean javascript this time . because im a loser

//use middleware
app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>hello koa!<>'
})
//use router
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>index page</h1>'
})
router.get('/home', async (ctx, next) => {
  ctx.response.body = '<h1>home page</h1>'
})
router.get('/list', (ctx, next) => {
  ctx.response.body = '<h1>list page</h1>'
})
app.use(router.routes())

// 命名路由
router.get('/user', '/user/:id', async (ctx, next) => {
  ctx.response.body = 'user page'
})
const userUrl = router.url('/user', 4)
console.log(userUrl)
const userUrl2 = router.url('/user', {id: 3})
console.log(userUrl2)

app.use(router.routes())

// 路由中间件
router.get(
  '/users/:id',
  async (ctx, next) => {
    ctx.response.body = 'welcome to koa router middleware...',
    ctx.user = {'name': 'lee'}
    await next()
  },
  async (ctx, next) => {
    console.log(ctx.user)
  }
)
app.use(router.routes())

app.listen(port, () => {
  `server is running at port ${port}`
})
