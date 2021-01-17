import Router from "router";

import Couriers from "../entities/couriers";

export class CouriersController {

    async getAll(ctx: Router.RouterContext) {
        try {
            ctx.body = await Couriers.getCollection();
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new CouriersController();