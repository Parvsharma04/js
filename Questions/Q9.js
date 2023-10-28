// Given an array of objects representing products with name and price, create a new array of product names using the map() method.
const products = [
  { name: "Product 1", price: 19.99 },
  { name: "Product 2", price: 29.99 },
  { name: "Product 3", price: 9.99 },
  { name: "Product 4", price: 49.99 },
  { name: "Product 5", price: 14.99 },
];

let inventory = products.map((obj) => {
  return obj.name;
});

console.log(inventory);
