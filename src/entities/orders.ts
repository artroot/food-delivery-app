import { Base, Entity } from "./entity.abstract";

type Params = Record<string, number | string>;

export interface Order extends Base {
    customer: number;
    restaurant: number;
    courier: number;
    street: string;
    build: string;
    suit: string;
    price: number;
    created_at?: string;
    completed_at?: string;
    completed?: boolean;
}

export class Orders extends Entity {

    get tableName(): string {
        return 'orders';
    }

    public getCollectionByParams(params: Params): Promise<Array<any>> {

        const query = this.QueryBuilder;

        return query.where(params).select('*');

    }

    public create(data: Order): Promise<Array<number>> {
        return super.create(data);
    }

    public setCompleted(id: number): Promise<number> {
        return super.update(id, {completed: 1});
    }

}

export default new Orders();