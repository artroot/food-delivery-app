# food-delivery-app

## Requirements

- node
- mysql

## Install

### Clone
```sh
git clone https://github.com/artroot/food-delivery-app.git
```

### Install dependencies
```sh
npm install
```

### Configure server

Set http listener host and port
```sh
npm config set food-delivery-app:server:host 127.0.0.1

npm config set food-delivery-app:server:port 4000
```

### Configure database

Set MYSQL connection parameters
```sh
npm config set food-delivery-app:database:host 127.0.0.1

npm config set food-delivery-app:database:user user

npm config set food-delivery-app:database:password password
```

Set created MYSQL database name and charset
```sh
npm config set food-delivery-app:database:database database

npm config set food-delivery-app:database:charset utf8
```

### Run migrations

```sh
npm run migrate
```
