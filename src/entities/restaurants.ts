import { Entity } from "./entity.abstract";

export class Restaurants extends Entity {

    get tableName(): string {
        return 'restaurants';
    }

}

export default new Restaurants();
