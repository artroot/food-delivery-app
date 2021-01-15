import app from './app';

const host = process.env.npm_package_config_server_host || '127.0.0.1';

const port = process.env.npm_package_config_server_port || 4000;

app.listen({host, port}, () => {
    console.info(`Server listening on ${host}:${port}`);
});
