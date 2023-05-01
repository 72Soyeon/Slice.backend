const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();


mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.log("Couldn't connect to MongoDB"));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task", require("./routes/task"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running...");
});
