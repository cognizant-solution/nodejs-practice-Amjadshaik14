
const express = require('express');
const app = express();
const port = 3000;

// Home page route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// About page route
app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});


