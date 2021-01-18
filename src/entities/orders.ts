import { Base, Entity } from "./entity.abstract";

import { connection } from '../storage';

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

    public getAddresses(courier: number) {

        const query = this.QueryBuilder;

        return query
        .where({courier})
        .groupBy('street', 'build', 'suit')
        .orderByRaw('count(id) DESC')
        .select('street', 'build', 'suit');

    }

    public countByParams(params: Params): Promise<Array<any>> {

        const query = this.QueryBuilder;

        return query
        .where(params)
        .count({ count: 'id' });

    }

    public getDeliveryTime(courier: number): Promise<Array<any>> {

        const query = this.QueryBuilder;

        return query
        .where({courier, completed: 1})
        .select(connection.raw('TIME_FORMAT(SEC_TO_TIME(AVG(TIMESTAMPDIFF(SECOND, `created_at`, `completed_at`))), "%H:%i:%s") as `avg`'));

    }

    public getTotalPriceByParams(params: Params): Promise<Array<any>> {

        const query = this.QueryBuilder;

        return query.where(params).sum({ total: 'price' });

    }

}

export default new Orders();