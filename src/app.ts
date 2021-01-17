import Koa from 'koa';

import bodyParser from 'koa-bodyparser';

import appRoutes from './routes/app.routes';

const app = new Koa();

app.use(bodyParser());

app.use(appRoutes.routes());

export default app;
