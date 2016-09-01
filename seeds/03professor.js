
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('professor').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('professor').insert({id:1, name:'Bathsheda Babbling'}),
        knex('professor').insert({id:2, name:'Cuthbert Binns'}),
        knex('professor').insert({id: 3, name:'Charity Burbage'}),
        knex('professor').insert({id: 4, name:'Filius Flitwick'}),
        knex('professor').insert({id: 5, name:'Wilhelmina Grubbly-Plank'}),
        knex('professor').insert({id: 6, name:'Minerva McGonagall'}),
        knex('professor').insert({id: 7, name:'Severus Snape'}),
        knex('professor').insert({id: 8, name:'Pomona Sprout'}),
        knex('professor').insert({id: 9, name:'Sybill Trelawney'}),
        knex('professor').insert({id: 10, name:'Septima Vector'}),
        knex('professor').insert({id: 11, name:'Libatius Borage'}),
        knex('professor').insert({id: 12, name:'Leonardo da Vinci'}),
        knex('professor').insert({id: 13, name:'Aurora Sinistra'}),
        knex('professor').insert({id: 14, name:'Wilkie Twycross'}),
        knex('professor').insert({id: 15, name:'Katarina Cremin'}),
        knex('professor').insert({id: 16, name:'Madam Hooch'}),
        knex('professor').insert({id: 17, name:'Alastor Moody'}),
        knex('professor').insert({id: 18, name:'Adalbert Waffling'}),
        knex.schema.raw("ALTER SEQUENCE professor_id_seq RESTART WITH 18")
      ]);
    });
};
