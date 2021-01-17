import request from 'supertest';

import app from '../app';

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