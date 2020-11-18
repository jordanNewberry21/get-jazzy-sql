const pg = require('pg');

// get the pool object from pg
const Pool = pg.Pool;
// make our own instance of that Pool from that template Pool object

const pool = new Pool({
    database: 'jazzy_ajax',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

// when we connect to the database, run a function
pool.on('connect', () => {
    console.log('Connected to the database...');
});

pool.on('error', (error) => {
    console.log('Error from pg', error);
});


module.exports = pool;