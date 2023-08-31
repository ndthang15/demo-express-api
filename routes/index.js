function initRouters(app) {
    if (!app) {
        throw new Error('Missing app for routes index!');
    }

    const middelwares = require('../middlewares')();

    app.get('/', middelwares.requireAuthentication, function (req, res) {
        // throw new Error('Error API');
        return res.status(200).json({ message: 'Welcome' });
    });
}

module.exports = initRouters;