import { DefaultRouter } from "router";

export default (router: DefaultRouter) => {

    router.get('/', async (ctx) => {
        ctx.body = {
            status: 'success'
        };
    });

    return router;
}
