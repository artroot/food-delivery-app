import Router from "router";

export class IndexController {

    async getAlive(ctx: Router.RouterContext) {
        try {
            ctx.body = {
                message: 'server alive',
                time: new Date(),
            };
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new IndexController();