// Given an array of objects representing books, filter out the books that have a rating higher than 4.0 using the filter() method.

let books = [
  { title: "book 1", author: " abc", rating: 10 },
  { title: "book 2", author: " ab", rating: 1 },
  { title: "book 3", author: " a", rating: 6 },
  { title: "book 4", author: " bc", rating: 4.1 },
  { title: "book 5", author: " ac", rating: 3 },
  { title: "book 6", author: " c", rating: 5 },
  { title: "book 7", author: " b", rating: 3 },
  { title: "book 8", author: " abcd", rating: 7 },
  { title: "book 9", author: " abce", rating: 8 },
];

let goodBooks = books.filter((obj) => {
  return obj.rating > 4.0;
});

console.log(goodBooks);
