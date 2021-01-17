import Router from "router";

import Orders from "../entities/orders";

import { Controller } from "./controller.abstract";

export class OrdersController extends Controller {

    async getByCourier(ctx: Router.RouterContext) {
        try {
            ctx.body = await this.model.getCollectionByParams({courier: ctx.params.id, completed: ctx.params.status || 0});
            if (!ctx.body.length) ctx.status = 404;
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new OrdersController(Orders);