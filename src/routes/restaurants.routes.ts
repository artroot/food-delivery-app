
import Router from "../router";

import RestaurantsController from "../controllers/restaurants.controller";

export default new Router()

.get('/', RestaurantsController.getAll);
