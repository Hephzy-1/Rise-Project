const http = require('http')

const handler = (req, res) => {
  switch (req.url){
    case '/index':
      res.redirect('/index.html');
      res.end();
      break;
    case '/':
      res.redirect('/index.html');
      res.end();
      break;
    case '/about':
      res.redirect('/about.html');
      res.end();
      break;
    case '/chat':
      res.redirect('/chat.html');
      res.end();
      break;
    case '/about.html':
      res.write('Home page');
      res.end();
      break;
    case '/learn':
      res.write('Learning Page');
      res.end();
      break;
    case '/auth':
      res.write('SignIn page');
      res.end();
      break;
    default:
      res.write('Page Not Found');
      res.end();
      break;
  }
}