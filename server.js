
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const initRouters = require('./routes'); // -> function

app.use(express.json());

// Application-level middlwares
// function -> serieal
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
app.use(function(req, res, next) {
    console.log('App middleware 2', req.method);
    // res.on('finish', logFn) // successful pipeline (regardless of its response)    
    // res.on('close', logFn) // aborted pipeline    
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

// load the cookie-parsing middleware
app.use(cookieParser())

app.listen(6065, function onListening() {
    console.log('Listening to port ' + 6065);
});

const pg = require('./initDb')(app);
app.pg = pg; // { connect, query }

initRouters(app);

// error-handling middleware
app.use((err, req, res, next) => {
    console.error("Received");
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});


// // Project SAD

// // Corralatate with business (requiments)
// ///// ERD -> Diagram Entity relationship
// // user
// // class
// // room
// // report
// /// relationship

// //// Database design

// //// Define main routes for RestAPI

// //// Route Objects
// // http://seta.com/users
// // http://seta.com/classes
// // http://seta.com/rooms

// /// Assign Method
// //// http://seta.com/users
// //// POST http://seta.com/users -> Create User
// // request body: {
// //     "name": "AAA",
// //     "age": "18"
// // }
// // response body: {
// //     "userId": "id"
// //     "name": "AAA",
// //     "age": "18",
// //     "classes": [{},{}]
// // } -> 200
// //// GET http://seta.com/users?status=deleted -> Get list Users
// // response body: [{
// //     "userId": "id"
// //     "name": "AAA",
// //     "age": "18",
// // }] -> 200
// //// GET http://seta.com/users/:userId -> Get User :userId details
// // response body: {
// //     "userId": "id"
// //     "name": "AAA",
// //     "age": "18",
// //     "classes": [{},{}]
// // }
// //// GET http://seta.com/users/:userId/classes?name= -> Get list Class of Users :userId
// // {
// //     "classId": "id"
// //     "name": "3A"
// // }
// //// PATCH/PUT http://seta.com/users/:userId -> Update User by ID 
// // -> PATCH (only update the value of properties which have been pass into body) 
// // users
// {
//     "name": "AAA",
//     "age": "18",
//     "classes": [{},{}]
// }
// // -> PATCH -> keep user.age = 18
// {
//     "name": "CCC"
// }

// // -> PUT -> user.age = null/undefined
// {
//     "name": "CCC"
// }

// //// DELETE http://seta.com/users/:userId -> DELETE -> 204 No Content
// // class
// {
//     "classId": "id"
//     "name": "3A",
//     "numStudent": "18",
//     "students": [users, users]
// }

// //// GET http://seta.com/classes?userId= -> Get list Class

// //// GET http://seta.com/report/users?status=deleted&fromDate= -> Get from Report tables rpt_user_daily (from report requirements)



// // Object - OOP - Database