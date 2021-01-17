import request from 'supertest';

import app from '../app';

test('GET /api/v1/couriers', async () => {
    const response = await request(app.callback()).get('/api/v1/couriers');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/couriers/:id', async () => {
    const response = await request(app.callback()).get('/api/v1/couriers/1');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

});

test('GET /api/v1/couriers/:id Non-existent', async () => {
    const response = await request(app.callback()).get('/api/v1/couriers/0');

    expect(response.status).toBe(404);

    expect(response.type).toBe('application/json');

});