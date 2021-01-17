import { DefaultRouter } from "router";

export class IndexController {

    async getIndex(ctx: DefaultRouter.RouterContext) {
        try {
            ctx.body = {};
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
        return;
    }

}

export default new IndexController();