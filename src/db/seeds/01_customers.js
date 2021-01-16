
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      return knex('customers').insert([
        {id: 1, name: 'Alan Rickman'},
        {id: 2, name: 'Benedict Cumberbatch'},
        {id: 3, name: 'Ryan Gosling'},
        {id: 4, name: 'Natalie Portman'},
        {id: 5, name: 'James McAvoy'},
        {id: 6, name: 'Jennifer Lawrence'},
        {id: 7, name: 'Daniel Radcliffe'},
        {id: 8, name: 'Winona Ryder'}
      ]);
    });
};
