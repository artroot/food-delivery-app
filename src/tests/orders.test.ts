import request from 'supertest';

import app from '../app';

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
