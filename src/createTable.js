const mysql2 = require("mysql2");
require("dotenv").config();

// Create a connection to the MySQL database
const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");

  // SQL statement to create the "products" table
  const createTableQuery = `
  CREATE TABLE table_crud3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45),
    price INT,
    description VARCHAR(255),
    cover VARCHAR(45)
  )
  `;

  // Execute the create table query
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error("Error creating table: ", err);
      connection.end();
      return;
    }
    console.log("Table created successfully");

    // SQL statement to insert data into the "products" table
    
   
  });
});
