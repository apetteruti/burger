//Import the model (burger.js)
var burger = require("../models/burger.js");

module.exports = function (app) {

    //when server hears call at /index, then it calls the selectAll function
    app.get("/index", function (req, res) {
        burger.selectAll()
            .then(function (data) {
                res.render("index", {
                    burger: data
                }); //pass to handlebars
            });
    });

    //call function to insert one burger
    app.post("/api/burger", function (req, res) {
        burger.insertOne(req.body.name)
            .then(function(data) {
                res.json({id: data.insertId});
            })
            .catch(function(err){
                console.log(err);
            });
    });


    //call function to update the burger status for devour
    // app.put





}