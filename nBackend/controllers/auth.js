const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const TollsModel = require("../models/TollsModel");
const bcrypt = require("bcrypt");

dotenv.config({ path: "../config/config.env" });
const createToken = (tollId, ObjId) => {
  return jwt.sign({ tollId, ObjId }, process.env.SECRET, { expiresIn: "15d" });
};

const login = async (req, res) => {
  const { tollId, password } = req.body;
  // console.log(identifier, password);

  try {
    // Find user by email or mobile number
    const toll = await TollsModel.findOne({ tollId });

    if (!toll) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid Toll Id or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, toll.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid email/mobile or password" });
    }

    // Create a token
    const token = createToken(toll.tollId, toll._id);

    res.json({ error: false, message: "Login successful", token, toll }); // Send token in response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req, res) => {
  const { tollId, spocContact, address, password } = req.body;
  try {
    const user = await TollsModel.findOne({ tollId });

    // Check if user already exists
    if (user) {
      return res
        .status(200)
        .json({ error: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newToll = new TollsModel({
      tollId: tollId,
      address: address,
      password: hashedPassword,
      spocContact: spocContact,
    });

    newToll.save();

    res
      .status(201)
      .json({ error: false, message: "Toll created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { login, register };
