import request from 'supertest';

import app from '../app';

let restaurant: any;

test('GET /api/v1/restaurants', async () => {
    const response = await request(app.callback()).get('/api/v1/restaurants');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/restaurants/:id', async () => {
    const response = await request(app.callback()).get('/api/v1/restaurants/1');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/restaurants/:id Non-existent', async () => {
    const response = await request(app.callback()).get('/api/v1/restaurants/0');

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

});

test('POST /api/v1/restaurants', async () => {

    const data = {
        name: "Created Restaurant"
    }

    const response = await request(app.callback()).post('/api/v1/restaurants').send(data);

    expect(response.status).toBe(201);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    restaurant = response.body[0];

});

test('PUT /api/v1/restaurants/:id', async () => {

    const data = {
        name: "Updated Restaurant"
    }

    const response = await request(app.callback()).put(`/api/v1/restaurants/${restaurant.id}`).send(data);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    restaurant = response.body[0];

});