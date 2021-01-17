import Couriers from "../entities/couriers";

import { CRUDController } from "./crud.controller.abstract";

export class CouriersController extends CRUDController {}

export default new CouriersController(Couriers);