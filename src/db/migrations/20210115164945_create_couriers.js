exports.up = (knex, Promise) => {
    return knex.schema.createTable('couriers', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('couriers');
};