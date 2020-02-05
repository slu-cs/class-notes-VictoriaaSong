// 1. Create an array of objects representing the courses you are taking this semester.
// Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
// Iterate through this array to find the largest course number in your schedule.

const courses = [
  {class: 'CS', number: 332},
  {class: 'CS', number: 250},
  {class: 'CS', number: 364},
  {class: 'STAT', number: 4007}
];

let largest = 0;
for(const classes of courses){
  if (classes.number > largest){
    largest = classes.number;
  }
};

console.log(largest);


// Question 2
const Book = function(title, author){
  this.title = title;
  this.author = author;
};

Book.prototype.checkNum = function(name){
  for(const names of this.author){
    if(name === names){
      return true;
    }
  }
  return false;
};

const aBook = new Book('Harry Potter', ['A', 'B', 'C']);

console.log(aBook.checkNum('A'));
console.log(aBook.checkNum('z'));

//Question 3
const range = function(a, b){
  low = 0;
  high = 0;

  if(a !== undefined && b !== undefined){
    low = a;
    high = b;
  }if(a !== undefined && b === undefined){
    low = 0;
    high = a;
  }

  const array = [];

  for(let i = low; i < high; i++){
    array.push(i);
  }

  return array;
};

console.log(range(5));
console.log(range(3, 8));
