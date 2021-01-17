import { Entity } from "./entity.abstract";

export class Orders extends Entity {

    get tableName(): string {
        return 'orders';
    }

}

export default new Orders();