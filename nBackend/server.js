const app = require("./app");
const dotenv = require("dotenv");
const bp = require("body-parser");
const PORT = process.env.PORT || 5000;
const connectDB = require("./helper/dbConnect");
dotenv.config({ path: "config/config.env" });
app.use(bp.json());
connectDB();


app.use("/api/auth",require("./routes/authRoute") )


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
