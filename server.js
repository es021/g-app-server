const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const PORT = 4040;
const path = require('path');
//Use Career Fair Schema
const schemaCF = require('./schema/_schema.js');

const isProd = (process.env.NODE_ENV === "production");

var root = (isProd) ? "/gapp" : "";
//var root = "";
if (isProd) {
    console.log = function (mes) {
        return;
    };
}


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

//allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// Graphql route
app.use(root + '/graphql', expressGraphQL({
    schema: schemaCF,
    graphiql: (process.env.NODE_ENV === "production") ? false : true //set able to use the graphQL web IDE to true
}));


app.get(root, function (req, res, next) {
    //console.log("root");
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log("React, Redux and GraphQL Server is now running on port " + PORT);
});

//app.get('/', function (req, res, next) {
//    res.sendFile(__dirname + '/www/index.html');
//});

/*
app.post('/login', function (req, res, next) {
    //console.log(req);
    res.send("auth");
    //var user_id = req.body.id;
    //res.sendFile(__dirname + '/public/index.html');
});

app.get('*', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});
*/