const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONN_STR_LOCAL);
    console.log("Mongo DB Connected: ", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
//mongodb+srv://truscapeslighting:tuscikde@cluster0.a0kvj.mongodb.net/
//mongodb://localhost:27017
