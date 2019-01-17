//ACCESSES THE DATABASE

//requiring the connection file that has the mySQL connection
var connection = require("./connection.js");


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
selectAll: function(burgerInput, cb) {

    var queryString = "SELECT * FROM " + burgerInput + ";";
    connection.query(queryString, function(err, result){
        if(err){
            throw err;
        }
        cb(result);

    });
},


//insertOne:


//updateOne:







};

// Export orm router for burger.js (model) to use
module.exports = orm;