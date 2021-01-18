import request from 'supertest';

import app from '../app';

let courier: any;

test('POST /api/v1/couriers', async () => {

    const data = {
        name: "Created Courier"
    }

    const response = await request(app.callback()).post('/api/v1/couriers').send(data);

    expect(response.status).toBe(201);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    courier = response.body[0];

});

test('PUT /api/v1/couriers/:id', async () => {

    const data = {
        name: "Updated Customer"
    }

    const response = await request(app.callback()).put(`/api/v1/couriers/${courier.id}`).send(data);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    courier = response.body[0];

});


test('GET /api/v1/couriers', async () => {

    const response = await request(app.callback()).get('/api/v1/couriers');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/couriers/:id', async () => {

    const response = await request(app.callback()).get(`/api/v1/couriers/${courier.id}`);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].id).toBe(courier.id);

});

test('GET /api/v1/couriers/:id/statistics/addresses', async () => {

    const response = await request(app.callback()).get(`/api/v1/couriers/1/statistics/addresses`);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/couriers/:id/statistics/orders', async () => {

    const response = await request(app.callback()).get('/api/v1/couriers/1/statistics/orders');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].count).toBeDefined();

});

test('GET /api/v1/couriers/:id/statistics/deliverytime', async () => {

    const response = await request(app.callback()).get('/api/v1/couriers/1/statistics/deliverytime');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].avg).toBeDefined();

});

test('GET /api/v1/couriers/:id/statistics/totalprice', async () => {

    const response = await request(app.callback()).get('/api/v1/couriers/1/statistics/totalprice');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].total).toBeDefined();

});

test('GET /api/v1/couriers/:id Non-existent', async () => {

    const response = await request(app.callback()).get('/api/v1/couriers/0');

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

});

test('DELETE /api/v1/couriers/:id', async () => {

    const response = await request(app.callback()).delete(`/api/v1/couriers/${courier.id}`);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body).toBe(1);

});

test('DELETE /api/v1/couriers/:id Non-existent', async () => {

    const response = await request(app.callback()).delete(`/api/v1/couriers/0`);

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

    expect(response.body).toBe(0);

});