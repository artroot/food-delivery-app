import { Entity } from "./entity.abstract";

export class Couriers extends Entity {

    get tableName(): string {
        return 'couriers';
    }

}

export default new Couriers();