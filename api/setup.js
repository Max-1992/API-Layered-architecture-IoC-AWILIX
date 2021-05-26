const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')


class SetUp {
    
    #server

    constructor() {}

    setUpMiddlewares(server) {
        server.use(logger('dev'));
        server.use(helmet());
        server.use(express.json());
        server.use(express.urlencoded({ extended: false }));
        // Set Config Cors
        const corsOptions = {
            exposedHeaders: 'Authorization'
        };
        server.use(cors(corsOptions));
        server.use(compression())
    }
}

module.exports = SetUp;