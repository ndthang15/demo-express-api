function initRouters(app) {
  if (!app) {
    throw new Error('Missing app for routes index!');
  }

  const middelwares = require('../middlewares')();
  const dal = require('../dal')(app);
  const bll = require('../bll')(app, dal);
  
  app.get('/', function (req, res) {
    return res.status(200).json({ message: 'Welcome' });
  });

  require('./users.js')(app, middelwares, bll, dal);
}

module.exports = initRouters; // DI -> Dependency injection