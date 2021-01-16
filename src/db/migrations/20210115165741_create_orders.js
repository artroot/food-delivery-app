exports.up = (knex, Promise) => {
    return knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.integer('customer').unsigned();
        table.integer('restaurant').unsigned();
        table.integer('courier').unsigned();
        table.string('street').notNullable();
        table.string('build').notNullable();
        table.string('suit').notNullable();
        table.float('price').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('completed_at').defaultTo('0000-00-00 00:00:00');
        table.boolean('completed').defaultTo(false);
        
        table.foreign('customer').onDelete('SET NULL').references('id').inTable('customers');
        table.foreign('restaurant').onDelete('SET NULL').references('id').inTable('restaurants');
        table.foreign('courier').onDelete('SET NULL').references('id').inTable('couriers');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('orders');
};