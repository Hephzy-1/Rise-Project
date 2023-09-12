const express = require('express');
const path = require('path');
const server = express();

server.use(express.static('front-end'));

// Define routes for each HTML page
server.get('/index.html', (req, res) => {
  if (req.query.redirect === '/') {
    res.redirect('/index.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
  }
});

server.get('/about.html', (req, res) => {
  if (req.query.redirect === '/about') {
    res.redirect('/about.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'about.html'));
  }
});

server.get('/chat.html', (req, res) => {
  if (req.query.redirect === '/chat') {
    res.redirect('/chat.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'chat.html'));
  }
});

server.get('/learn.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'learn.html'));
});

server.get('/signin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'signin.html'));
});

// Catch-all route for 404 errors
server.get('*', (req, res) => {
  res.status(404).send(`
    <h1>404</h1>
    <h3>Page Not Found</h3>
    <a href="/index.html">Back to Home</a>
  `);
});

server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
