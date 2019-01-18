
//Importing ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });

    },

   // insertOne:
   insertOne: function(vals, cb){
       orm.insertOne("burger", vals, function(res){
           cb(res);
       })
   }

   
   // * `updateOne()`


};






//export the object burger
module.exports = burger;