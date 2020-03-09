// Bakery web server
const express = require('express');

// Create the server
const app = express();

// Use a view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// Ignore icon requests
app.get('/favicon.ico', function(request, response){
  response.status(204).end();
});

// Log request to the console
app.use(function(request, response, next){
  console.log('------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body = ', request.body);
  next();  // Keep handling this request
});

// Home page
app.get('/', function(request, response){
  response.render('index');
});

// Routing
app.get('/cakes', require('./cakes.js'));
app.get('/pies', require('./pies.js'));

// Handle undefined routes
app.use(function(request, response, next){
  console.log('Replied with 404')
  response.status(404).end();
});

// Handel other errors
app.use(function(error, request, response, next){
  console.error(error, stack);
  console.status(500).send(error.message);
});

// Start the server
app.listen(3000);  // 3000 is the port
console.log('Server is ready.')
