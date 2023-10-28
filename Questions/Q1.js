const arr = [1, 2, 3, 4, 5];

function filterRange(array, a, b) {
  return array.filter((ele) => {
    return ele >= a || ele <= b;
  });
}

let newArr = filterRange(arr, 4, 2);
console.log(newArr);
