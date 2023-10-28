// Given an array of numbers, create a new array that contains the squares of each number using the map() method.

const arr = [1, 2, 3, 4, 5];

let newArr = arr.map((ele) => {
  return ele * ele;
});

console.log(newArr);
