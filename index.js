const addon = require('./addon');

const jsSum = () => {
  let a = 3.14, b = 2.7;

  for(let i = 0; i < 1000000000; i++) {
    a += b;
  }

  let total = a;

  return total;
}

console.time("c++");
addon.sum();
console.timeEnd("c++");
console.time("JavaScript");
jsSum();
console.timeEnd("JavaScript");
