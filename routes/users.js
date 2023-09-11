
const express = require('express');

module.exports = function (app, middelwares, bll) {
  if (!app) {
    throw new Error('missing app');
  }

  if (!bll) {
    throw new Error('missing bll');
  }

  const routerUsers = express.Router();
  const middlewareFunctions = [middelwares.logOriginalUrl, middelwares.requireAuthentication];

  // Router-level middleware
  // A middleware function with no mount path. This code is executed for every request to the router
  routerUsers.use(middlewareFunctions);

  // a middleware sub-stack that handles GET requests to the /user/:id path
  routerUsers.get('/:id', async (req, res, next) => {

    try {
      const userDetail = await bll.users.getUserDetail(req.params.id);

      return res.status(200).send(userDetail); 
    } catch (error) {
      next(error);
      return;
      // return res.status(500).send('Custom error');
    }
  });

  // use the router and 401 anything falling through
  app.use('/users', routerUsers);
};