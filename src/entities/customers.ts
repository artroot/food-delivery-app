import { Base, Entity } from "./entity.abstract";

export interface Customer extends Base {
    name: string;
}

export class Customers extends Entity {

    get tableName(): string {
        return 'customers';
    }

    public create(data: Customer): Promise<Array<number>> {
        return super.create(data);
    }

    public update(id: number, data: Customer): Promise<number> {
        return super.update(id, data);
    }

}

export default new Customers();