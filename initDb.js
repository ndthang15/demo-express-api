const { Pool } = require('pg');
const _ = require('lodash');

module.exports = (app) => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    statement_timeout: 30000 // miliseconds
  });

  async function connect() {
    const clientCreated = await pool.connect();

    return {
      query: (sql, values, mapFunc) =>
        query(sql, values, mapFunc, clientCreated),
      release: () => clientCreated.release()
    };
  }

  async function query(sql, values, mapFunc, dbTrans) {
    const client = _.isObject(dbTrans) ? dbTrans : await pool.connect();

    try {
      console.log('Start exec SQL: ', sql, values);
      const res = await client.query(sql, values);
      console.log('Completed SQL', sql, values);
      return mapFunc ? mapFunc(res) : res;
    } catch (e) {
      if (e.message.includes('timeout')) {
        console.log('Exec SQL timeout: ', sql, values);

        throw new Error('Time out from query to db');
      }

      console.log('Exec SQL failed: ', sql, values, e);

      throw e;
    } finally {
      if (!dbTrans) {
        client.release();
      }
    }
  }

  pool.on('connect', () => {
    console.log('Connection Pool has been connected!');
  });

  pool.on('remove', () => {
    console.log('Connection Pool has been removed!');
  });

  return { connect, query };
};
