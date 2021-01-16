
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('couriers').del()
    .then(function () {
      return knex('couriers').insert([
        {id: 1, name: 'Aarush'},
        {id: 2, name: 'Eva'},
        {id: 3, name: 'Darshit'},
        {id: 4, name: 'Divit'},
        {id: 5, name: 'Ranbir'}
      ]);
    });
};
