// Given an array of objects representing students with name and age properties, find the first student who is older than 20 using the find() method.

const students = [
  { name: "Parv", age: 18 },
  { name: "Harry", age: 20 },
  { name: "Ron", age: 17 },
  { name: "Fang", age: 15 },
  { name: "Hagrid", age: 21 },
];

let senior = students.find((obj) => {
  return obj.age > 20;
});

console.log(senior);
