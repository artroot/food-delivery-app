import request from 'supertest';

import app from '../app';

test('app works', async () => {
    const response = await request(app.callback()).get('/alive');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body.message).toBe('server alive');

});
