const _ = require('lodash');

module.exports = function middelwares() {
    function requireAuthentication(req, res, next) {
        const authHeader = _.get(req, 'headers.authorization');
        const cookieSessionId = req.cookies ? req.cookies['session-id'] : null;
        let authToken;

        if (authHeader) {
            const authorization = authHeader.split(' ');
            if (
                authorization.length > 1 &&
                authorization[0].toLowerCase() === 'bearer' &&
                authorization[1].length > 0
            ) {
                authToken = authorization[1];
            } else if (cookieSessionId) {
                authToken = cookieSessionId;
            }
        }

        // if (!authToken) {
        //     return res.status(401).end();
        // }

        req._authToken = authToken;
        
        return next();
    }

    return { requireAuthentication }
}