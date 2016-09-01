
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('house').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('house').insert({id: 1, name:'Hufflepuff', description: 'Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members.', location: 'accessed through a pile of large barrels, found stacked in a shadowy stone recess on a right-hand side corridor near the kitchens', mascot: 'badger', colors: 'yellow and black', house_head_id: 8}),
        knex('house').insert({id: 2, name:'Ravenclaw', description:  'Ravenclaw house members are characterised by their wit, learning, and wisdom.', location: 'Ravenclaw Tower', mascot: 'eagle', colors: 'blue and bronze', house_head_id: 4}),
        knex('house').insert({id: 3, name:'Slytherin', description: 'Slytherin is traditionally home to students who exhibit such traits as cunning, resourcefulness, and ambition.', location: 'dungeous under the Black lake', mascot: 'snake', colors: 'green and silver', house_head_id: 7}),
        knex('house').insert({id: 4, name:'Gryffindor', description: 'Gryffindor members are characterized by courage, chivalry, and determination.', location: 'Gryffindor Tower', mascot: 'lion', colors: 'red and gold', house_head_id: 6}),
        knex.schema.raw("ALTER SEQUENCE house_id_seq RESTART WITH 4")

      ]);
    });
};
