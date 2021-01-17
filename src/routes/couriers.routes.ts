
import Router from "../router";

import CouriersController from "../controllers/couriers.controller";

export default new Router()

.get('/', ctx => CouriersController.getAll(ctx))

.get('/:id', ctx => CouriersController.getById(ctx))

.get('/:id/statistics/addresses', ctx => CouriersController.getAddresses(ctx))

.get('/:id/statistics/orders', ctx => CouriersController.getOrdersCount(ctx))

.post('/', ctx => CouriersController.create(ctx))

.put('/:id', ctx => CouriersController.update(ctx))

.delete('/:id', ctx => CouriersController.delete(ctx));
