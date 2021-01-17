
import Router from "../router";

import CouriersController from "../controllers/couriers.controller";

export default new Router()

.get('/', CouriersController.getAll);
