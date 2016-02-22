(()=>{
    'use strict';
    const imgSearch = require(process.cwd() + '/app/controllers/imgSearch.server');

    module.exports = (app) => {
        app.route('/')
            .get((req, res)=>{
               res.send('Init Route setup');
            });
        app.route('/imgSearch/:search')
            .get(imgSearch);
    };

})();