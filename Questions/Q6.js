// Given an array of numbers, first use the map() method to square each number, and then use the filter() method to filter out numbers that are greater than 50.

const arr = [14, 234, 23, 642, 3, 7, 12, 1];

let squaredArr = arr.map((ele) => {
  return ele * ele;
});

let greaterThan50 = squaredArr.filter((ele) => {
  return ele > 50;
});

console.log("Squared Array :", squaredArr);
console.log("Filtered Array :", greaterThan50);
