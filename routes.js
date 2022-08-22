let router = require('express').Router();

router.get('/', function(req, res){
    res.json({
        status:'API is working',
        message:"Welcome to Test API"
    })
})

let ApiRoutes = require('./actions');
router.use('/api', ApiRoutes);

module.exports = router