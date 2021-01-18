
import Router from "../router";

import CouriersController from "../controllers/couriers.controller";

import couriersStatisticsRoutes from './couriers.statistics.routes';

export default new Router()

.get('/', ctx => CouriersController.getAll(ctx))

.get('/:id', ctx => CouriersController.getById(ctx))

.post('/', ctx => CouriersController.create(ctx))

.put('/:id', ctx => CouriersController.update(ctx))

.delete('/:id', ctx => CouriersController.delete(ctx))

.use('/:id/statistics', couriersStatisticsRoutes.routes());
