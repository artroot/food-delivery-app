import { Storage, QueryBuilder, connection } from '../storage';

export abstract class Entity {

    abstract tableName: string;

    private get _connection(): Storage {
        return connection;
    }

    public get QueryBuilder(): QueryBuilder {
        return this._connection(this.tableName);
    }

}