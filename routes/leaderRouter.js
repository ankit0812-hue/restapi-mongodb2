const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router({mergeParams: true});
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will get all leaders to you!');
})
.post((req,res,next) =>{
    res.end('will add the leaders: '+ req.body.name + ' with description '+ req.body.description);
})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not allowed on /leaders');
})
.delete((req,res,next) =>{
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will get the leader: '+ req.params.leaderId +' for you!');
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('POST operation not allowed on /leaders/'+ req.params.leaderId);
})
.put((req,res,next) =>{
    res.write('Updating the leader: '+ req.params.leaderId +'\n');
    res.end('Will update the leader: '+ req.params.leaderId);
})
.delete((req,res,next) =>{
    res.end('Deleting the leader: '+ req.params.leaderId);
});

module.exports = leaderRouter;