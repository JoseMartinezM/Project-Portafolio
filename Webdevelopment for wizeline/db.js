/*const { Pool } = require('pg');

const pool = new Pool({
    user: 'expressadmin',
    password: 'expressadmin',
    host: 'localhost',
    port: 5432,
    database: 'express'
});*/

const config = require('./config');
const { Pool } = require('pg');

const environment = process.env.ENV || 'dev';

const pool = new Pool(config[environment]);

module.exports = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end()
};
