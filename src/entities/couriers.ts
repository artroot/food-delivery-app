import { Base, Entity } from "./entity.abstract";

export interface Courier extends Base {
    name: string;
}

export class Couriers extends Entity {

    get tableName(): string {
        return 'couriers';
    }

    public create(data: Courier): Promise<Array<number>> {
        return super.create(data);
    }

    public update(id: number, data: Courier): Promise<number> {
        return super.update(id, data);
    }

}

export default new Couriers();