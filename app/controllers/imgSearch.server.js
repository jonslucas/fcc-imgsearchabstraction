(()=>{
    'use strict';
    require('dotenv').load();
    const baseURL = process.env.BASE_SEARCH_URL,
         engineId = process.env.ENGINE_ID,
           apiKey = process.env.GOOGLE_API_KEY,
             request = require('request');
    //request.debug = true;
    module.exports = (req, res)=>{
        console.log(req.query.offset);
        request({
            url: baseURL,
            qs: {
                key: apiKey,
                cx: engineId,
                type: 'image',
                num: 10,
                start: (parseInt(req.query.offset, 10)+1 || 1),
                safe: 'high',
                imgSize: 'large',
                defaultToImageSearch: true,
                q: req.params.search
            },
            method: 'GET'
        }, (err,resp, body)=>{
            if (err) console.error(err);
            const data = JSON.parse(body).items.map((img, ind)=>{
                let tn;
                if (img.pagemap.cse_thumbnail) tn = img.pagemap['cse_thumbnail'][0].src;
                else console.log(img);
                return {
                    'url': img.pagemap.cse_image[0].src,
                    'snippet':img.snippet,
                    'num':ind+1,
                    'thumbnail':tn || '',
                    'context': img.link
                };
            });
            res.json(data);
        });

    };
})();