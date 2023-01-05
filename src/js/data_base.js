const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a2l6i0n8a2004',
  database: 'sup',
});

module.exports = connection;