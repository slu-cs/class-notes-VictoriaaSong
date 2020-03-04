// Hello world web server
const express = require('express');

// Create the server
const app = express();

// Respond to one request
app.get('/', function(request, response){
  response.send('Hello Victoria');
});


// Start the server
app.list(3000);  // 3000 is the port
console.log('Server is ready.')
