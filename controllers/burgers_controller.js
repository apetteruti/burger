//Importing express package and the router
var express = require("express");

//Creating the router
var router = express.Router();

//Import the model (burger.js)
var burger = require("../models/burger.js");

//gets the data entered into the burgers_db database and then renders to screen
router.get("/index", function (req, res) {
    burger.selectAll(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    
    });
});



//exporting the router for server.js to use
module.exports = router;