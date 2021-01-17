
import Router from "../router";

import CustomersController from "../controllers/customers.controller";

export default new Router()

.get('/', ctx => CustomersController.getAll(ctx))

.get('/:id', ctx => CustomersController.getById(ctx))

.post('/', ctx => CustomersController.create(ctx));
