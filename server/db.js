const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'manuelcasanova',
  host: 'localhost',
  database: 'tipsdistribution',
  password: 'posgres',
  port: 5432
})

module.exports = pool;