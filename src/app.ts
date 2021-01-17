import Koa from 'koa';

import appRoutes from './routes/app.routes';

const app = new Koa();

app.use(appRoutes.routes());

export default app;
