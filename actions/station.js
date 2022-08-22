const stationFunction = require('../functions/station');
const { responseCode, errorResponse, successResponse } = require('../utils/helpers');


const getAllStations = async function (request, response) {
    try {
        const allStations = await stationFunction.getStations();
        return successResponse(response, responseCode.SUCCESS, 'All Stations', allStations);
    }
    catch (e) {
        return errorResponse(response, responseCode.BAD_REQUEST, 'Unable Get Stations')
    }
}

const getAllStationsByDate = async function (request, response) {
    try {
        const allStations = await stationFunction.getStations();
        return successResponse(response, responseCode.SUCCESS, 'All Stations', allStations);
    }
    catch (e) {
        return errorResponse(response, responseCode.BAD_REQUEST, 'Unable Get Stations')
    }
}


module.exports = {
    getAllStations,
    getAllStationsByDate
}