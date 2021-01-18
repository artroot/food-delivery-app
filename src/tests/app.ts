import request from 'supertest';

import app from '../app';

export default () => {

    test('app alive', async () => {
        const response = await request(app.callback()).get('/alive');

        expect(response.status).toBe(200);

        expect(response.type).toBe('application/json');

        expect(response.body.message).toBe('server alive');

    });

}
