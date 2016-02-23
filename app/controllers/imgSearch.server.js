(()=>{
    'use strict';
    require('dotenv').load();
    const baseURL = process.env.BASE_SEARCH_URL,
         engineId = process.env.ENGINE_ID,
           apiKey = process.env.GOOGLE_API_KEY,
             request = require('request');

    module.exports = (req, res)=>{
        request({
            url: baseURL,
            qs: {
                key: apiKey,
                cx: engineId,
                searchType: 'image',
                num: 10,
                start: (parseInt(req.query.offset, 10)+1 || 1),
                safe: 'high',
                imgSize: 'large',
                imgType: 'photo',
                q: req.params.search
            },
            method: 'GET'
        }, (err,resp, body)=>{
            if (err) console.error(err);
            const data = JSON.parse(body).items.map((img)=> {
                return {
                    'url': img.link,
                    'snippet': img.snippet,
                    'context': img.image.contextLink,
                    'thumbnail': img.image.thumbnailLink
                };
            });
            res.json(data);
        });

    };
})();