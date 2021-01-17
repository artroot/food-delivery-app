
import Router from "../router";

import CouriersController from "../controllers/couriers.controller";

export default new Router()

.get('/', ctx => CouriersController.getAll(ctx))

.get('/:id', ctx => CouriersController.getById(ctx))

.post('/', ctx => CouriersController.create(ctx));
