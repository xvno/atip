const path = require('path');
const Koa = require('koa');
const app = new Koa();
const { unifyWidth } = require('./src/utils.js');
const cors = require('@koa/cors');
app.use(cors());

// configure logger
switch (process.env.NODE_ENV) {
    case 'dev':
        app.use(log);
        break;
    default:
        app.use(require('koa-logger')());
        break;
}

app.use(require('koa-static')(path.resolve(__dirname)));
app.use((ctx) => {
    ctx.body = 'Nothing here, check your url!';
});

async function log(ctx, next) {
    let { request: req } = ctx;
    let startTS = Date.now();
    await next();
    console.log(
        `${unifyWidth(Date.now() - startTS)}ms: ${req.method} ${req.url}`
    );
}

const PORT = process.env.PORT || 9000;
app.listen(PORT, function () {
    console.log(`Server started listen at port ${PORT}!`);
});
