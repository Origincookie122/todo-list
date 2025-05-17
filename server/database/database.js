const mysql = require('mysql2');

const { Database } = require('../config/config.json');

const pool = mysql.createPool(Database.MySQL.Config).promise();

module.exports = pool;


