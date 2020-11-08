const express = require("express");
const app = express();

/**
 * To accept requests localhost:3000 -> localhosts:3001
 */
const cors = require("cors");
app.use(cors());

/**
 * Register routes.
 */
app.use("/", require("./routes/index"));

app.listen(3001, console.log("Server running..."));
