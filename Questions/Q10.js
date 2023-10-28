// Given an array of numbers, filter out the numbers that are prime using the filter() method.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let prime = arr.filter((ele) => {
  let flag = 0;
  if (ele == 0 || ele == 1) return false;
  for (let i = 2; i * i <= ele; i++) {
    if (ele % i == 0) {
      flag++;
      break;
    }
  }
  if (flag == 0) return true;
  return false;
});

console.log(prime);