"use strict";
const StationRepository = require("../lib/repositories/stationRepository");
const { serverFunctions, response } = require("../utils");
const { env } = require("../config");

const METHODS = {
  GET: "get",
  POST: "post",
};

const getStationsFromUrl = async () => {
  try {
    const callObject = {
      callUrl: env.stationUrl,
      callMethod: METHODS.GET,
    };
    const stationListCall = await serverFunctions.makeUrlCallWithoutData(
      callObject
    );
    const outResponse = {
      name: "name",
      coordinates: "coordinates",
      totalDocks: "totalDocks",
      docksAvailable: "docksAvailable",
      bikesAvailable: "bikesAvailable",
      kioskStatus: "kioskStatus",
      kioskPublicStatus: "kioskPublicStatus",
      kioskId: "kioskId",
      addressStreet: "addressStreet",
    };
    return await response.arrayResponse(stationListCall.features, outResponse);
  } catch (err) {
    throw err;
  }
};

const addStationToDb = async () => {
  try {
    const stations = await getStationsFromUrl();
    if (stations && stations.length) {
      return await Promise.all(
        stations.map(async (station) => {
          await createStation(station);
        })
      );
    }
    return;
  } catch (e) {
    throw e;
  }
};

const createStation = async (data) => {
  try {
    const newStation = await new StationRepository().createStation(data);
    return newStation;
  } catch (e) {
    throw e;
  }
};

const getStations = async () => {
  try {
    const allStations = await new StationRepository().getAllStations();
    return allStations;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  addStationToDb,
  createStation,
  getStations,
};
