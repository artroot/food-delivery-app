import Router from "../router";

import restaurantsRoutes from "./restaurants.routes";

export default new Router()

.use('/restaurants', restaurantsRoutes.routes());
