import { Pool } from 'pg';

const pool = new Pool({
  user: 'manuelcasanova',
  host: 'localhost',
  database: 'movies',
  password: 'posgres',
  port: 5432
})

export default pool;