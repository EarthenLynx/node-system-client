const express = require("express"); 

// Setup the router
const router = express.Router();

// import the controller
const getMashine = require("../controller/getMashine");

// Configure the router
router.get('/', (req, res) => {
    getMashine(req, res)
})

module.exports = router; 