const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router({mergeParams: true});
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will get all promotions to you!');
})
.post((req,res,next) =>{
    res.end('will add the promotions: '+ req.body.name + ' with description '+ req.body.description);
})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not allowed on /promotions');
})
.delete((req,res,next) =>{
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will get the promotion: '+ req.params.promoId +' for you!');
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('POST operation not allowed on /promotions/'+ req.params.promoId);
})
.put((req,res,next) =>{
    res.write('Updating the promotion: '+ req.params.promoId +'\n');
    res.end('Will update the promotion: '+ req.params.promoId);
})
.delete((req,res,next) =>{
    res.end('Deleting the promotion: '+ req.params.promoId);
});

module.exports = promoRouter;