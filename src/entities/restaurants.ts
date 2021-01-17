import { Base, Entity } from "./entity.abstract";

export interface Restaurant extends Base {
    name: string;
}

export class Restaurants extends Entity {

    get tableName(): string {
        return 'restaurants';
    }

    public create(data: Restaurant): Promise<Array<number>> {
        return super.create(data);
    }

}

export default new Restaurants();
