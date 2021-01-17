import Orders from '../entities/orders';

import Router from 'router';

import Couriers from "../entities/couriers";

import { CRUDController } from "./crud.controller.abstract";

export class CouriersController extends CRUDController {

    public async getAddresses(ctx: Router.RouterContext) {
        try {

            ctx.body = await Orders.getAddresses(ctx.params.id);

        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}

export default new CouriersController(Couriers);