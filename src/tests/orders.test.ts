import request from 'supertest';

import app from '../app';

let order: any;

test('GET /api/v1/orders/courier/:id/:status', async () => {

    const response = await request(app.callback()).get('/api/v1/orders/courier/1/1');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/orders/courier/:id/:status Non-existent', async () => {

    const response = await request(app.callback()).get('/api/v1/orders/courier/0/0');

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

});

test('POST /api/v1/orders', async () => {

    const data = {
        restaurant: 1,
        customer: 1,
        street: 'Test Street',
        build: 'Test Build',
        suit: 'Test Suit',
        price: 30.3
    };

    const response = await request(app.callback()).post('/api/v1/orders').send(data);

    expect(response.status).toBe(201);

    expect(response.type).toBe('application/json');

    order = response.body[0];

});

test('PUT /api/v1/orders/:id/complete', async () => {

    const response = await request(app.callback()).put(`/api/v1/orders/${order.id}/complete`)

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});
