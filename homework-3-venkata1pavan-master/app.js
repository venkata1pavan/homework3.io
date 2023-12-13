const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.get('/bio', (req, res) => {
  res.send('This is the bio page. Hello, I am [Your Name]!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
