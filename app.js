const Koa = require('koa')
const app = new Koa()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server is running at port ${port}......`);
})
