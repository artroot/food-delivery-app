const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {

    client: 'mysql',
    connection: {
      host     : process.env.npm_package_config_database_host,
      user     : process.env.npm_package_config_database_user,
      password : process.env.npm_package_config_database_password,
      database : process.env.npm_package_config_database_database,
      charset  : process.env.npm_package_config_database_charset,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }

};
