import Couriers from "../entities/couriers";

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

    async create(ctx: Router.RouterContext) {
        try {
            const data = ctx.request.body;

            const courier = await Couriers.getFree();

            if (!courier.length) throw new Error('No free couriers');

            data.courier = courier[0].id;

            const created = await this.model.create(data);

            ctx.body = await this.model.getCollection(created[0]);

            ctx.status = 201;

        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

    async setCompleted(ctx: Router.RouterContext) {
        try {

            ctx.body = await this.model.setCompleted(ctx.params.id);

        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new OrdersController(Orders);