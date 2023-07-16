const mysql2 = require("mysql2");
require("dotenv").config();

// Create a connection to the MySQL server
const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

// Connect to the server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database server: ", err);
    return;
  }
  console.log("Connected to the database server");

  // Create the database
  const createDbQuery = "CREATE DATABASE database_crudApi";
  connection.query(createDbQuery, (err) => {
    if (err) {
      console.error("Error creating the database: ", err);
    } else {
      console.log("Database created");
    }
  });
});
