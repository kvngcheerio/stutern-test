let router = require('express').Router();

let stationActions = require('./station')


router.get('/stations/all', stationActions.getAllStations);


module.exports = router