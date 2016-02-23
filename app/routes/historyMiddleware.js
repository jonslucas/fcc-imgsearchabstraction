(()=>{
    'use strict';
    const History = require('../models/searchHistory');

    module.exports = (req, res, next)=>{
        new History({
            query: req.params.search
        }).save((err)=>{
            if (err) console.error(err);
        });
        next();
    };
})();