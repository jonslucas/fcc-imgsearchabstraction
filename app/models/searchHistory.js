(()=>{
    'use strict';
    const mongoose = require('mongoose'),
            Schema = mongoose.Schema;

    const searchHistory = new Schema({
        'query': String,
        'timestamp': {type: Date, default: Date.now}
    });

    module.exports = mongoose.model('searchHistory', searchHistory);
})();