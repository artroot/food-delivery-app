import Router from "../router";

import restaurantsRoutes from "./restaurants.routes";

import couriersRoutes from "./couriers.routes";

export default new Router()

.use('/restaurants', restaurantsRoutes.routes())

.use('/couriers', couriersRoutes.routes());
