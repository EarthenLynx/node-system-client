const express = require("express"); 

// Setup the router
const router = express.Router();

// Configure the router
router.get('/', (req, res) => {
    console.log("I was hit on a secondary route by a request!");
    res.send({"msg": "Hello. You've hit the server on the secondary route"});
})

module.exports = router; 