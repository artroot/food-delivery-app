import Restaurant from "../entities/restaurants";

import { CRUDController } from "./crud.controller.abstract";

export class RestaurantsController extends CRUDController {}

export default new RestaurantsController(Restaurant);
