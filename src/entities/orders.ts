import { Entity } from "./entity.abstract";

type Params = Record<string, number | string>;

export class Orders extends Entity {

    get tableName(): string {
        return 'orders';
    }

    public getCollectionByParams(params: Params): Promise<Array<any>> {

        const query = this.QueryBuilder;

        return query.where(params).select('*');

    }
}

export default new Orders();