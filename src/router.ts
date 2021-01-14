import fs from 'fs';

import Router from 'koa-router';

const router = (router: Router): Router => {

    const routesPath = `${__dirname}/routes`;

    if (fs.existsSync(routesPath)) {

        const routes = fs.readdirSync(routesPath).filter(fn => fn.endsWith('.js'));

        routes.forEach(filename => {

            const route = require(`${routesPath}/${filename.replace('.js', '')}`);
            
            route.default(router);

        });
    
    }

    return router;
};

export { Router as DefaultRouter };

export default router(new Router());
