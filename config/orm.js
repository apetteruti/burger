//ACCESSES THE DATABASE

//requiring the connection file that has the mySQL connection
const connection = require("./connection.js");

//create a constructor
function ORM(table) {
    this.table = table;

    this.selectAll = function() {
            const sql = `SELECT * FROM ??`;

            return new Promise(function(resolve, reject) {
                connection.query(sql, table, function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            })
        },

        this.insertOne = function(burger_name) {
            const sql = `INSERT INTO ?? (burger_name) VALUES (?)`;

            return new Promise(function(resolve, reject) {
                connection.query(sql, [table, burger_name], function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            })
        }

    this.updateOne = function(devoured, id) {
        const sql = `UPDATE ?? SET devoured = ? WHERE id = ?`;

        return new Promise(function(resolve, reject){
            connection.query(sql, [table, devoured, id], function(err, data){
                if (err) reject(err);
                resolve(data);
            });
        })
    }
}


// Export orm router for burger.js (model) to use
module.exports = ORM;