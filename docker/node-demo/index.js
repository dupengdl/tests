const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World from Docker';
};

app.use(main);
console.log('Server started at http://localhost:3000');
app.listen(3000);
