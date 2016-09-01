
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table){
    table.increments();
    table.string('name');
    table.integer('house_id');
    table.integer('year');
    table.string('patronus');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
