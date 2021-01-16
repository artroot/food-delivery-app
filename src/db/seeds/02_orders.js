const randomId = (limit) => Math.floor(Math.random() * Number(limit)) + 1;

const randomPrice = () => Math.round(Math.random()/0.01*100)/100;

const address = [
  {street: 'Desbrosses Street', build: '8', suit: '108'},
  {street: 'Desbrosses Street', build: '8', suit: '87'},
  {street: 'Pearl Street', build: '3', suit: '8'},
  {street: 'Maiden Lane', build: '92', suit: '12'},
  {street: 'Maiden Lane', build: '92', suit: '18'},
  {street: 'Maiden Lane', build: '90', suit: '188'},
  {street: 'Maiden Lane', build: '91', suit: '22'},
  {street: 'Bleecker Street', build: '5', suit: '5'},
  {street: 'Bleecker Street', build: '5', suit: '7'}
];

const randomAddress = () => {
  return address[Math.floor(Math.random() * address.length)];
};

const formatedTimestamp = (d)=> {
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`;
};

const randomCompletedDate = (d) => {
  const counter = Math.round(((Math.random()/0.1)*20))/100;
  return new Date(d.getTime() + (counter*60*60*1000));
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {

      // Generate test orders
      const orders = (recordsCount) => {

        const insert = [];

        for (let id = 1; id <= Number(recordsCount); id++) {

          const createdDate = new Date();

          const record = {
            id,
            customer: randomId(8),
            restaurant: randomId(6),
            courier: randomId(5),
            price: randomPrice(),
            created_at: formatedTimestamp(createdDate),
            completed_at: formatedTimestamp(randomCompletedDate(createdDate)),
            completed: true
          };

          insert.push(Object.assign(record, randomAddress()));

        }

        return insert;

      };

      return knex('orders').insert(orders(50));

    });
};
