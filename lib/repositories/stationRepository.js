const mongoose = require("mongoose");
require("../models/station");

class StationRepository {
  constructor() {
    this.stationModel = mongoose.model("Station");
  }

  async createStation(data) {
    return this.stationModel.create(data);
  }

  async getAllStations() {
    return await this.stationModel.find({}).exec();
  }

  async getStationByTime(data) {
    return await this.stationModel.find({}).exec();
  }
}

module.exports = StationRepository;
