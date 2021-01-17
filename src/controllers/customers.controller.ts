import Customers from "../entities/customers";

import { CRUDController } from "./crud.controller.abstract";

export class CustomersController extends CRUDController {}

export default new CustomersController(Customers);