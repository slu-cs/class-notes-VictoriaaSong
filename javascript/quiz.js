// Name: Victoria (Yu Song)

//////////////////////////////////////////////////////////////// Question 1

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
const seats1 = labs.distinct('seats');
console.log(seats1);

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
const seats2 = labs.find({seats: {$gt: 10}});

// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
labs.sort((a, b) => a.seats-b.seats);

//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
const even = numbers.find(x => x % 2 == 1).limit(1);

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.
const find = function(array, test){
  for(const element of array){
    if(test(element)){
      return element;
    }
  }
  return undefined;
};

//////////////////////////////////////////////////////////////// Question 3

// This creates the user object described on the quiz.
// It has a question method you can call in part A.
const readline = require('readline');
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A. Make small talk, using traditional callbacks.

user.question(function(str1, callback1){
  console.log('What is your name? ');
  callback1((str1) => console.log('Hello ', str1, '.'));

  user.question(function(str2, callback2){
    console.log('How are you doing? ');
    callback2((str2) => console.log('I am also ', str2, '.'));
  });
});


// The user.question method doesn't actually return a promise, so here is a question function that does.
// Call this question function in part B instead of calling the user.question method.
const question = function(prompt) {
  return new Promise(resolve => user.question(prompt, resolve));
};

// B. Make small talk again, using promises.
question(str1)
  .then(function(str1) {
    console.log('What is your name? ');
    console.log('Hello ', str1, '.');
    return question();
  })
  .then(function(str2){
    console.log('How are you doing? ')
    console.log('I am also ', str2, '.')
  });

//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.
/*
// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.
*/