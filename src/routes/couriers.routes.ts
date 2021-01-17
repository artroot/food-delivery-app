
import Router from "../router";

import CouriersController from "../controllers/couriers";

export default new Router()

.get('/', CouriersController.getAll);
