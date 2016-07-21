exports.up = function(knex, Promise) {
    return knex.schema.createTable('pirates', (table) => {
        table.increments('id');
        table.string('name');
        table.string('accessory');
        table.string('poison');
        table.string('image_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pirates');
};
