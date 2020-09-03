const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'salvus_db',
    password: 'pg2212',
    port: 5432,
});

module.exports = client;