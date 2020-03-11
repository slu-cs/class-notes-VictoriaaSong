// Florist web server
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database
let flowers = [
  {id: 'tulip', color:'pink', season:'spring'},
  {id: 'rose', color:'red', season:'summer'}
];

// GET/flowers
router.get('/', function(request, response){
  if(request.query.color){
    response.send(flowers.filter(f => f.color === request.query.color));
  }else if(request.query.season){
    response.send(flowers.filter(f => f.season === request.query.season));
  }else{
    response.send(flowers);
  }
});

// GET/flowers/id
router.get('/:id', function(request, response, next){
  const flower = flowers.find(f => f.id === request.params.id);
  if(!flower){
    next();  // Leads to 404
  }else{
    response.send(flower);
  }
});

// POST/flowers
router.post('/', function(request, response){
  const flower = request.body;
  if(!flower.id){
    response.status(400).send('Missing ID');
  }else if(flowers.find(f => f.id === flower.id)){
    response.status(400).send('Duplicate');
  }else{
    flowers.push(flower);
    response.status(201).send(flowers);
  }
});

// DELETE/flowers/id
router.delete('/:id', function(request, response, next){
  const flower = flowers.find(f => f.id === request.params.id);
  if(!flower.id){
    next();  // Leads to 404
  }else{
    flowers = flowers.filter(f => f.id !== flower.id);
    response.status(200).send(flowers);
  }
});

// PUT/flowers/id
router.put('/:id', function(request, response, next){
  const flower = flowers.find(f => f.id === request.params.id);
  if(!flower.id){
    next();  // Leads to 404
  }else{
    if(request.body.color) flower.color = request.body.color;
    if(request.body.season) flower.season = request.body.season;
    response.status(200).send(flowers);
  }
});

module.exports = router;
