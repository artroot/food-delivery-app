import { Entity } from "./entity.abstract";

export class Customers extends Entity {

    get tableName(): string {
        return 'customers';
    }

}

export default new Customers();