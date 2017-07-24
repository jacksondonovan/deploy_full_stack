
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('firstnames').del()
    .then(function () {
      // Inserts seed entries
      return knex('firstnames').insert([
        {name: 'mittens'},
        {name: 'todd'},
        {name: 'margo'}
      ]);
    });
};
