
import Router from "../router";

import RestaurantsController from "../controllers/restaurants.controller";

export default new Router()

.get('/', ctx =>  RestaurantsController.getAll(ctx))

.get('/:id', ctx =>  RestaurantsController.getById(ctx))

.post('/', ctx =>  RestaurantsController.create(ctx))

.put('/:id', ctx =>  RestaurantsController.update(ctx))

.delete('/:id', ctx =>  RestaurantsController.delete(ctx));
