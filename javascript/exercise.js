// Question 1
let sum = 0;
for(let i = 1; i <= 10; i++){
  sum += i ** 2;
};

console.log(sum);

// Question 2
let a = 0;
let b = 1;
let c = 1;
let d = 0;

while(c < 1000){
  d = b;
  a = b;
  b = c;
  c += d;
};

console.log(c);

// Question 3
let count = 0;
for(let i = 1; i < 101; i++){
  if(i % 3 === 0 && i % 5 !== 0){
    count += 1;
  }else if(i % 3 !== 0 && i % 5 === 0){
    count += 1;
  }
};

console.log(count);

// Question 4
const smallest = function(){
  let n = 1;
  while(n > 0){
    let i = 1;
    while (n % i === 0 && i <= 10){
      i++;
    }
    n++;
  }
  return n;
};

console.log(smallest());
