const _ = require('lodash');
const camelcaseKeys = require('camelcase-keys');

module.exports = (app) => {
  const db = app.pg;

  async function getUser(userId, dbClient = db) {
    if (!userId) {
      throw new Error('userId is required.');
    }

    const sql = `
      SELECT u.user_id,
        u.full_name,
        u.region,
        u.email,
        u.phone_number,
        u.image_preview_path,
        u.user_type,
        u.created_date
      FROM public.user u
      WHERE  u.user_id = $1
    `;
    const sqlParams = [userId];
    const resultQuery = await dbClient.query(sql, sqlParams);
    if (_.isEmpty(resultQuery.rows)) {
      throw new Error('User Not Found');
    }
    return camelcaseKeys(resultQuery.rows[0], { deep: true }); // { userId: 1, ... }
  }

  async function getUserClasses(userId, dbClient = db) {
    if (!userId) {
      throw new Error('userId is required.');
    }

    const sql = `
    select 	uc.user_id,
        uc.class_id,
        c.class_name,
        c.is_verified,
        c.created_date
    from 	user_class uc 
      inner join class c on c.class_id = uc.class_id 
    where 	uc.user_id = $1;
    `;
    const sqlParams = [userId];
    const resultQuery = await dbClient.query(sql, sqlParams);

    return camelcaseKeys(resultQuery.rows, { deep: true });
  }

  return { getUser, getUserClasses };
};