
import Router from "../router";

import OrdersController from "../controllers/orders.controller";

export default new Router()

.get('/courier/:id/:status?', ctx => OrdersController.getByCourier(ctx))

.post('/', ctx => OrdersController.create(ctx))

.put('/:id/complete', ctx => OrdersController.setCompleted(ctx));
