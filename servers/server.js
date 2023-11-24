const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const { authUser } = require("./middlewares/auth");
const authRoute = require("./routes/auth");
const { errorHandler } = require("./middlewares/error");
const logger = require("./middlewares/logger"); // Import the logger middleware
const path = require('path');
var bodyParser = require('body-parser');

const server = express();
server.use(express.static(path.join(__dirname, 'front-end')));
server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const port = process.env.PORT;

server.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

server.get("/", (req, res) => {
  res.send("Welcome to the Ecommerce API", (path.join(__dirname, 'front-end', 'index.html')));
})

// Define routes for each HTML page
server.get('/about', (req, res) => {
  if (req.url === '/about') {
    res.redirect('/about.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'about'));
  }
});

server.get('/chat.html', (req, res) => {
  if (req.url=== '/chat') {
    res.redirect('/chat.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'chat.html'));
  }
});

server.get('/learn.html', (req, res) => {
  if (req.url=== '/learn') {
    res.redirect('/learn.html');
  } else {
    res.sendFile(path.join(__dirname, 'front-end', 'learn.html'));
  }
});

server.use("/auth", authRoute)
server.use(authUser)
server.use(errorHandler);

// Catch-all route for 404 errors
server.use((req, res, next) => {
  logger.warn(`Route not found: ${req.method} ${req.url}`);
  res.status(404).send(`
    <h1>404</h1>
    <h3>Page Not Found</h3>
    <a href="/index.html">Back to Home</a>
  `);
});

server.listen(port, () => {
  logger.info(`Server running on PORT ${port}`);
});