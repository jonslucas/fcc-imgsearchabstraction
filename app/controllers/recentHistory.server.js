(()=>{
    'use strict';
    const qHistory = require('../models/searchHistory');

    module.exports = (req, res)=>{
        qHistory.find({}).limit(10)
                .exec((err, hist)=>{
                    if (err) console.error(err);
                    res.send(hist.map(elem=>{
                        return {
                            'query': elem.query,
                            'timestamp': elem.timestamp
                        };
                    }));
                });
    };
})();