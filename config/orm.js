//ACCESSES THE DATABASE

//requiring the connection file that has the mySQL connection
var connection = require("./connection.js");


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

//creates the object/constructor for all the SQL functions
var orm = {
selectAll: function(tableInput, cb) {

    var sql = "SELECT * FROM " + tableInput + ";";
    connection.query(sql, function(err, result){
        if(err){
            throw err;
        }
        cb(result);

    });
},

insertOne: function (table, cb){

    //Building the sql statement that will take in the values from the form
    var sql = `INSERT INTO " + burger (burger_name) VALUES (?)`;

    connection.query(sql, vals, function (err, result){
        if(err) {
            throw err;
        }
        cb (result);
    })
}


//updateOne:







};

// Export orm router for burger.js (model) to use
module.exports = orm;