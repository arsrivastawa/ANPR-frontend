const mongoose = require("mongoose");

const TollsSchema = new mongoose.Schema(
  {
    tollId: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    spocContact: {
      type: String,
      required: true,
    },
  },
  { collection: "tolls", timestamps: true }
);

module.exports = mongoose.model("Tolls", TollsSchema);
