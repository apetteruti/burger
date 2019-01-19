
//Importing ORM to create functions that will interact with the database
const ORM = require("../config/orm.js");

const burger = new ORM("burger");


//export the object burger
module.exports = burger;