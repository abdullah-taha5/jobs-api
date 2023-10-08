const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")


// Middleware
app.use(express.json());
app.use(cors());
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://uahmed2022:27727746@main.6re3ibd.mongodb.net/e-jobs");
    console.log("Connected To Data Base");
  } catch (error) {
    console.log("Connection Failed To Date Base", error);
  }
};
connect()

app.use("/api/users", require("./routes/userRoute"))

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
