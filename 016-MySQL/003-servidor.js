// Import required modules
const express = require('express');
const mysql = require('mysql2');

// Create an Express application
const app = express();

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'blog',
  password: 'Blog123$',
  database: 'blog'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// Define a route to fetch data from the 'entradas' table and send it as JSON
app.get('/blog', (req, res) => {
  // SQL query to select all entries from the 'entradas' table
  const sql = 'SELECT * FROM entradas';

  // Execute the query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});