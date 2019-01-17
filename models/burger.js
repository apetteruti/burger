
//Importing ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });

    },

   // insertOne:

   //updateOne:


};



// * `updateOne()`



//export the object burger
module.exports = burger;