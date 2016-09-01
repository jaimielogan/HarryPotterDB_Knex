

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('parents').insert({name: 'Alice Longbottom'}),
        knex('parents').insert({name: 'Narcissa Malfoy'}),
        knex('parents').insert({name: 'Lily Potter'}),
        knex('parents').insert({name: 'Molly Weasley'}),
        knex('parents').insert({name: 'Vincent Crabbe, Sr.'}),
        knex('parents').insert({name: 'Amos Diggory'}),
        knex('parents').insert({name: 'Goyle Sr'}),
        knex('parents').insert({name: 'Frank Longbottom'}),
        knex('parents').insert({name: 'Xenophilius Lovegood'}),
        knex('parents').insert({name: 'Lucius Malfoy'}),
        knex('parents').insert({name: 'James Potter'}),
        knex('parents').insert({name: 'Arthur Weasley'})
      ]);
    });
};
