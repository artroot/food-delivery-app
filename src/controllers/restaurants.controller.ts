import Router from "router";

import Restaurant from "../entities/restaurants";

export class RestaurantsController {

    async getAll(ctx: Router.RouterContext) {
        try {
            ctx.body = await Restaurant.getCollection();
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new RestaurantsController();
