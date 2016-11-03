
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cargos', function(table) {
        table.increments('id').primary();
        table.string('nome');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cargos');
};