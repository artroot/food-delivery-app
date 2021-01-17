
import Router from "../router";

import RestaurantController from "../controllers/restaurants";

export default new Router()

.get('/', RestaurantController.getAll);
