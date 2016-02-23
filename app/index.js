(()=>{
    'use strict';
    const express = require('express'),
           routes = require('./routes'),
         mongoose = require('mongoose'),
         mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
              app = express();

    mongoose.connect(mongoURI);

    routes(app);

    module.exports = app;
})();