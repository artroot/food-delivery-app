import request from 'supertest';

import app from '../app';

test('App works', async () => {
    const response = await request(app.callback()).get('/');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');

    expect(response.body.status).toBe('success');

    expect(response.text).toMatchSnapshot();
});