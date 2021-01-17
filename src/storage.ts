import Knex from 'knex';

export interface Storage extends Knex {};

export interface QueryBuilder extends Knex.QueryBuilder {};

export const connection = Knex(require('../knexfile'));