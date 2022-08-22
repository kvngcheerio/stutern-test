const moongoose = require("mongoose");
const softDelete = require("mongoose-delete");

let StationSchema = new moongoose.Schema(
  {
    name: { type: String },
    kioskId: { type: String},
    coordinates: { type: Array},
    totalDocks: { type: Number },
    docksAvailable: { type: Number },
    bikesAvailable: { type: Number },
    kioskStatus: { type: String },
    kioskPublicStatus: { type: String },
    addressStreet: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

StationSchema.plugin(softDelete, {
  deletedAt: true,
  validateBeforeDelete: true,
  overrideMethods: ["count", "find", "findOne", "findOneAndUpdate", "update"],
});

module.exports = moongoose.model("Station", StationSchema, "Stations");
