
import Router from "../router";

import CustomersController from "../controllers/customers.controller";

export default new Router()

.get('/', CustomersController.getAll);
