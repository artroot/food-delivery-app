import request from 'supertest';

import app from '../app';

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