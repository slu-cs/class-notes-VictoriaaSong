// Write a standalone filter function that works like the array filter method,
// but with the array as its first argument and the callback as its second argument.
const filter = function(array, test) {
  const copy = [];
  for (const element of array) {
    if (test(element)) {
      copy.push(element);
    }
  }
  return copy;
};

//////////////////////////////////////////////////////////////////////////////////////

// Reverse sort this array.
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b) => b - a);

//////////////////////////////////////////////////////////////////////////////////////

// Read majors.csv (which needs to be on your VM when you run this code).
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});

// Create an array of objects, so that each line of the file is represented by an object with three properties.
const rows = [];
file.on('line', function(line) {
  const columns = line.split(',');
  rows.push({
    discipline: columns[0],
    majors: Number(columns[1]),
    minors: Number(columns[2])
  });
});

// Let the popularity score for a discipline be the number of majors it has plus half the number of minors.
// Sort disciplines by (increasing) popularity.
file.on('close', function() {
  rows.sort((a,b) => (a.majors + a.minors/2) - (b.majors + b.minors/2));
});
