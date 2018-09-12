const serverless = require('serverless-http');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// Middleware registration looks like express
// app.use(/* ... */);

// Routing is not a part of koa core, but can be handled by koa-router package for example which is a third party library
const router = new Router();
// Routes take a series of async functions
router.get(
  '/ping',
  async (ctx, next) => {
    console.log(
      'Hello from first function, pretty useless really but hey! Just showing what I can do! :D'
    );
    await next();
  },
  async ctx => {
    ctx.body = { message: 'Pong!' };
  }
);

app.use(router.routes());

module.exports.handler = serverless(app);
