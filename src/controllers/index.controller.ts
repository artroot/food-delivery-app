import Router from "router";

export class IndexController {

    async getAlive(ctx: Router.RouterContext) {
        ctx.body = {
            message: 'server alive',
            time: new Date(),
        };
    }

}

export default new IndexController();