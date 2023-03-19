require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config");


app.use(express.json());


app.use("/", require("./routes"));






const port = config.port;
app.listen(port, ()=> console.log("run on" + " " + port));