const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    port: '5432',
    database: 'RestApi-Auth-JWT',
    password: '12345678',
    host: 'localhost',
});

module.exports = pool;