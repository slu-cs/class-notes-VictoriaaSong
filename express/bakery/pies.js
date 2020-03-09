// Router for pie-related requests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
]

// cs-linuxlab-18.stlawu.edu:3000/cakes/
router.get('/', function(request, response){
  response.render('pies/index', {pies: pies});
});

// cs-linuxlab-18.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response){
  // Pretend database Lookup
  const pie = pies.find(pie => pie.id === request.params.id)

  if(!pie){   // cake === undefined
    next();  // Pass on this request
  }else{
    response.render('pies/detail', {pies: pie});
  }
});
module.exports = router;
