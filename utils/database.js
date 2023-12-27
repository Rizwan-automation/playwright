const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost', // or the host where your database is running
user: 'root',
password: 'root',
database: ''
});

connection.connect(error => {
if (error) throw error;
console.log('Successfully connected to the database.');
});

module.exports = connection;