import Router from "../router";

import restaurantsRoutes from "./restaurants.routes";

import couriersRoutes from "./couriers.routes";

import customersRoutes from "./customers.routes";

export default new Router()

.use('/restaurants', restaurantsRoutes.routes())

.use('/couriers', couriersRoutes.routes())

.use('/customers', customersRoutes.routes());
