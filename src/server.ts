import app from './app';

export const host = process.env.npm_package_config_server_host;

export const port = process.env.npm_package_config_server_port;

app.listen({host, port});

console.info(`Server listening on ${host}:${port}`);
