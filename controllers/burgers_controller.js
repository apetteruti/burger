//Import the model (burger.js)
const burger = require("../models/burger.js");

module.exports = function(app) {

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
    app.post("/api/burgers", function(req, res) {
        burger.insertOne(req.body.burger_name)
            .then(function(data) {
                res.json({id: data.insertId});
            })
            .catch(function(err){
                console.log(err);
            });
    });

    //call function to update the burger status for devour
    app.put("/api/burgers/:id", function(req, res){
        // let devoured = (req.body.devoured == 0);
        burger.updateOne(req.params.id)
        .then(function(data){
            if(data.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
    });
}