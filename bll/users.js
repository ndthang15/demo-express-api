const _ = require('lodash');

module.exports = (app, dal) => {
  const db = app.pg;

  // async function getUserDetail(userId) {
  //   if (!userId) {
  //     throw new Error('userId is required.');
  //   }

  //   const dbClientTrans = await db.connect();
  //   let userDetail = null;
  //   try {
  //     await dbClientTrans.query('BEGIN');
  //     userDetail = await dal.users.getUser(userId, dbClientTrans);

  //     const userClasses = await dal.users.getUserClasses(userId, dbClientTrans);

  //     userDetail.classes = userClasses || [];

  //     await dbClientTrans.query('COMMIT');
  //   } catch (error) {
  //     await dbClientTrans.query('ROLLBACK');
  //     throw error;
  //   } finally {
  //     dbClientTrans.release();
  //   }

  //   console.log("🚀 ~ file: users.js:30 ~ getUserDetail ~ userDetail:", userDetail);
  //   return userDetail;
  // }

  async function getUserDetail(userId) {
    if (!userId) {
      throw new Error('userId is required.');
    }

    const userDetail = await dal.users.getUser(userId);
    const userClasses = await dal.users.getUserClasses(userId);

    userDetail.classes = userClasses || [];

    return userDetail;
  }

  return { getUserDetail };
};