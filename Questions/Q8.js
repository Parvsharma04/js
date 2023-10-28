// Given an array of user objects, each with id and username, find the user with a specific id using the find() method.

const users = [
  { id: 1, username: "user1" },
  { id: 2, username: "user2" },
  { id: 3, username: "user3" },
  { id: 4, username: "user4" },
  { id: 5, username: "user5" },
];

let target = users.find((obj) => {
  return obj.id === 4;
});

console.log(target);
