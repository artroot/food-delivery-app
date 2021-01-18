
import Router from "../router";

import OrdersController from "../controllers/orders.controller";

export default new Router()

.get('/addresses', ctx => OrdersController.getAddresses(ctx))

.get('/orders', ctx => OrdersController.getOrdersCount(ctx))

.get('/deliverytime', ctx => OrdersController.getDeliveryTime(ctx))

.get('/totalprice', ctx => OrdersController.getTotalPrice(ctx));
