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
    app.post("/api/burger", function(req, res) {
        burger.insertOne(req.body.burger_name)
            .then(function(data) {
                res.json({id: data.insertId});
            })
            .catch(function(err){
                console.log(err);
            });
    });

    //call function to update the burger status for devour
    app.put("/api/burger/:id", function(req, res){
        let devoured = (req.body.devoured == "true");
        burger.updateOne(devoured, req.params.id)
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
    });
}