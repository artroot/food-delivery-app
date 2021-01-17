import { Storage, QueryBuilder, connection } from '../storage';

export abstract class Entity {

    abstract tableName: string;

    private get _connection(): Storage {
        return connection;
    }

    public get QueryBuilder(): QueryBuilder {
        return this._connection(this.tableName);
    }

    public getCollection(id?: string) {

        const query = this.QueryBuilder;

        if (id) query.where({id});

        return query.select('*');

    }

}