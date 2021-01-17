import { type } from 'os';
import { Storage, QueryBuilder, connection } from '../storage';

export interface Base {
    id?: number;
}

export abstract class Entity {

    abstract tableName: string;

    private get _connection(): Storage {
        return connection;
    }

    public get QueryBuilder(): QueryBuilder {
        return this._connection(this.tableName);
    }

    public getCollection(id?: number): Promise<Array<any>> {

        const query = this.QueryBuilder;

        if (id) query.where({id});

        return query.select('*');

    }

    public create(data: any): Promise<Array<number>> {

        const query = this.QueryBuilder;

        return query.insert(data);

    }

}