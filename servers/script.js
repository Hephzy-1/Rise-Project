const http = require('http')

const handler = (req, res) => {
  switch (req.url){
    case '/index.html':
      res.write('Home page');
      res.end();
      break;
    case '/':
      res.write('Home page');
      res.end();
      break;
    case '/about':
      res.write('About page');
      res.end();
      break;
    case '/chat':
      res.write('Chat box');
      res.end();
      break;
    case '/learn':
      res.write('Learning Page');
      res.end();
      break;
    case '/signin':
      res.write('SignIn page');
      res.end();
      break;
    default:
      res.write('Page Not Found');
      res.end();
      break;
  }
}