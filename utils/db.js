const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.DB_PASSWORD
});

console.log('database connected...');
module.exports = pool.promise();