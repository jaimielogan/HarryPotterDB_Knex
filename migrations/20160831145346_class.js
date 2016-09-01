
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', function(table){
    table.increments();
    table.string('name');
    table.integer('subject_id');
    table.integer('professor_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class');
};
