// Importing the Express library
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Set the application to listen on port 3000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
