import app from '../app';

const mockListen = jest.fn();

app.listen = mockListen;

const server = require('../server');

afterEach(() => mockListen.mockReset());

test('Server works', async () => {

    expect(process.env.npm_package_config_server_host).toBeDefined();

    expect(process.env.npm_package_config_server_port).toBeDefined();

    expect(mockListen.mock.calls.length).toBe(1);

    expect(mockListen.mock.calls[0][0].host).toBe(server.host);

    expect(mockListen.mock.calls[0][0].port).toBe(server.port);

});

