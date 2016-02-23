(()=>{
    'use strict';
    const      imgSearch = require(process.cwd() + '/app/controllers/imgSearch.server'),
              recentHist = require(process.cwd() + '/app/controllers/recentHistory.server'),
        logSearchHistory = require('./historyMiddleware');

    module.exports = (app) => {
        app.route('/')
            .get((req, res)=>{
               res.sendFile(process.cwd() + '/public/html/index.html');
            });
        app.get('/imgSearch/:search', logSearchHistory, imgSearch);
        app.get('/search/recent', recentHist);
    };

})();