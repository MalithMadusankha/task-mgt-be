const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("<=== MongoDB database connection successfully ===>");
});

const UserRouter = require("./routes/User");
const EventRouter = require("./routes/Event");
const TaskRouter = require("./routes/Task");

app.use("/user", UserRouter);
app.use("/event", EventRouter);
app.use("/Task", TaskRouter);

app.listen(port, () => {
  console.log(` <======= Server is running on port: ${port} ======>`);
});
