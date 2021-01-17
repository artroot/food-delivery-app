import Router from "router";

import Customers from "../entities/customers";

export class CustomersController {

    async getAll(ctx: Router.RouterContext) {
        try {
            ctx.body = await Customers.getCollection();
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new CustomersController();