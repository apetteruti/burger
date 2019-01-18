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


router.post("/api/burger", function(req, res){
    burger.insertOne([burger_name], [req.body.burger_name], function(result){
        res.json({burger_name});
    });
});



//exporting the router for server.js to use
module.exports = router;