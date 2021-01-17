import request from 'supertest';

import app from '../app';

test('GET /api/v1/restaurants', async () => {
    const response = await request(app.callback()).get('/api/v1/restaurants');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.text).toMatchSnapshot();
});
