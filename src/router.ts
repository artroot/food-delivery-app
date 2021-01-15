import Router from 'koa-router';

import index from './routes/index';

const router = (router: Router): Router => {

    index(router);

    return router;
};

export { Router as DefaultRouter };

export default router(new Router());
