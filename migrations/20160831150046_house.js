
exports.up = function(knex, Promise) {
  return knex.schema.createTable('house', function(table){
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.string('mascot');
    table.string('colors');
    table.integer('house_head_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('house');
};
