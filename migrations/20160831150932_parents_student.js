
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parents_student', function(table){
    table.integer('parent_id');
    table.integer('student_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parents_student');
};
