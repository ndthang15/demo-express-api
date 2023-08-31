const express = require('express');
const app = express();
const initRouters = require('./routes');

app.use(express.json());
app.use(function(req, res, next) {
    // res.on('finish', logFn) // successful pipeline (regardless of its response)    
    res.on('close', logFn) // aborted pipeline    
    // res.on('error', errorFn) // pipeline internal error

    function logFn() {
        console.log(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`);
    }

    function abortFn() {
        console.warn('Request aborted by the client');
    }

    function errorFn() {
        console.error(`Request pipeline error: ${err}`);
    }

    return next();
});

app.listen(6065, function onListening() {
    console.log('Listening to port ' + 6065);
});

initRouters(app);