// Router for cake related reequests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'vanilla', flavor: 'Vanilla'},
  {id: 'chocolate', flavor: 'Chocolate'}
]

// cs-linuxlab-18.stlawu.edu:3000/cakes/
router.get('/', function(request, response){
  response.render('cakes/index', {cakes: cakes});
});

// cs-linuxlab-18.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response){
  // Pretend database Lookup
  const cake = cakes.find(cake => cake.id === request.params.id)

  if(!cake){   // cake === undefined
    next();  // Pass on this request
  }else{
    response.render('cakes/detail', {cakes: cake});
  }
});

module.exports = router;
