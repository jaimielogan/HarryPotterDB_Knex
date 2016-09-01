
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('subjects').insert({id: 1, name: 'Alchemy'}),
        knex('subjects').insert({id: 2, name: 'Ancient Runes'}),
        knex('subjects').insert({id: 3, name: 'Apparition'}),
        knex('subjects').insert({id: 4, name: 'Arithmancy'}),
        knex('subjects').insert({id: 5, name: 'Art'}),
        knex('subjects').insert({id: 6, name: 'Astronomy'}),
        knex('subjects').insert({id: 7, name: 'Care of Magical Creatures'}),
        knex('subjects').insert({id: 8, name: 'Charms'}),
        knex('subjects').insert({id: 9, name: 'Defence Against t}he Dark Arts'}),
        knex('subjects').insert({id: 10, name: 'Divination'}),
        knex('subjects').insert({id: 11, name: 'Flying'}),
        knex('subjects').insert({id: 12, name: 'Herbology'}),
        knex('subjects').insert({id: 13, name: 'History of Magic'}),
        knex('subjects').insert({id: 14, name: 'Magical Theory'}),
        knex('subjects').insert({id: 15, name: 'Muggle Studies'}),
        knex('subjects').insert({id: 16, name: 'Music'}),
        knex('subjects').insert({id: 17, name: 'Potions'}),
        knex('subjects').insert({id: 18, name: 'Transfiguration'}),
        knex('subjects').insert({id: 19, name: 'Xylomancy'}),
        knex.schema.raw("ALTER SEQUENCE subjects_id_seq RESTART WITH 19")
      ]);
    });
};
