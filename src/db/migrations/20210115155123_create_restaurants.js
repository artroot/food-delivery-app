exports.up = (knex, Promise) => {
    return knex.schema.createTable('restaurants', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('restaurants');
};