
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return knex('restaurants').insert([
        {id: 1, name: 'KFC'},
        {id: 2, name: 'McDonalds'},
        {id: 3, name: 'Burger King'},
        {id: 4, name: 'Taco Bell'},
        {id: 5, name: 'Starbucks'},
        {id: 6, name: 'Dunkin Donuts'}
      ]);
    });
};
