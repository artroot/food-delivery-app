
import Router from "../router";

import RestaurantsController from "../controllers/restaurants";

export default new Router()

.get('/', RestaurantsController.getAll);
