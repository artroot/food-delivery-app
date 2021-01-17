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

}

export default new Customers();