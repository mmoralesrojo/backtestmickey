const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const cors = require('cors');
const mongoose = require("mongoose");
const dbConfig = require('../config.js').odm.kamigames.db;

const config = require('../config').server;

const {printIp, handleAsyncExceptions} = require('./util/index');
const groute = require('./routes');

function run() {
    const app = express();

    app.set('root', `${__dirname}/..`);

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: true}));
    // parse application/json
    app.use(bodyParser.json({limit: '50mb'}));
    // enable cors
    app.use(cors());

    // handle errors and send them back to browser
    app.use(errorhandler());

    // set the base uri
    app.set('baseUrl', config.baseUrl);

    mongoose.connect(dbConfig.serviceName + '://' + dbConfig.connection.user + ':' + dbConfig.connection.password + '@' + dbConfig.connection.host + ':' + dbConfig.connection.port + '/' + dbConfig.connection.database);
    mongoose.Promise = global.Promise;

    var mongooseConnection = mongoose.connection;

    mongooseConnection.on('connected', function() {
        console.log('Conectado a MongoDB');
    });
    mongooseConnection.on('eror', function(err) {
        console.log('Error en la conexión a MongoDB: ' + err);
    });
    mongooseConnection.on('disconnected', function() {
        console.log('Desconectado de MongoDB');
    });

    // mount the routes
    app.use(groute);

    // mount server
    app.listen(config.port, config.host, () => {
        console.log(`app running on http://${config.host}:${config.port}`);
        printIp();
    });
}

module.exports = run;

if (require.main === module) {
    handleAsyncExceptions();
    run();
}