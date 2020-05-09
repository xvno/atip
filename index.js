const path = require('path')
const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT || 9000;
const { log, warn } = console;
const { unifyWidth } = require('./src/utils.js');

app.use(async (ctx, next) => {
    let startTS = Date.now();
    await next();
    log(`${unifyWidth(Date.now() - startTS)}ms: ${ctx.originalUrl}`);
});

app.use(require('koa-static')(path.resolve(__dirname)));

app.use((ctx) => {
    ctx.body = 'Hello Koa';
});

app.listen(PORT, function () {
    console.log(`Server started listen at port ${PORT}!`);
});
