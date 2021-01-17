import { Entity } from "./entity.abstract";

export class Restaurants extends Entity {

    get tableName(): string {
        return 'restaurants';
    }

    public getCollection() {
        return this.QueryBuilder.select('*');
    }

}

export default new Restaurants();
