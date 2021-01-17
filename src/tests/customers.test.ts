import request from 'supertest';

import app from '../app';

let customer: any;

test('GET /api/v1/customers', async () => {

    const response = await request(app.callback()).get('/api/v1/customers');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/customers/:id', async () => {

    const response = await request(app.callback()).get('/api/v1/customers/1');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/customers/:id Non-existent', async () => {

    const response = await request(app.callback()).get('/api/v1/customers/0');

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

});

test('POST /api/v1/customers', async () => {

    const data = {
        name: "Created Customer"
    }

    const response = await request(app.callback()).post('/api/v1/customers').send(data);

    expect(response.status).toBe(201);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    customer = response.body[0];

});

test('PUT /api/v1/customers/:id', async () => {

    const data = {
        name: "Updated Customer"
    }

    const response = await request(app.callback()).put(`/api/v1/customers/${customer.id}`).send(data);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body[0].name).toBe(data.name);

    customer = response.body[0];

});

test('DELETE /api/v1/customers/:id', async () => {

    const response = await request(app.callback()).delete(`/api/v1/customers/${customer.id}`);

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body).toBe(1);

});

test('DELETE /api/v1/customers/:id Non-existent', async () => {

    const response = await request(app.callback()).delete(`/api/v1/customers/0`);

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

    expect(response.body).toBe(0);

});