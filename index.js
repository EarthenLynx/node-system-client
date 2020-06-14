const express = require("express");
const app = express(); 

// Import the routes
const main = require("./routes/main");
const secondary = require("./routes/secondary");

// Configure the routes
app.use("/", main);
app.use("/second", secondary);

const port = process.env.PORT || 8080; 

app.listen(port, () => console.log("Listening on http://127.0.0.1:" + port));