var express = require('express');
var router = express.Router();
var path = require('path');
var Pages=require('./../models/pages');

router.get('*/no', function(req,res,next){
    if(req.headers['x-requested-with']){
        Pages.find(function(err, doc){
            res.json(doc);
        })
    } else{
        next()
    }
});

//////////////////////
    router.use(function(req,res,next){
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
