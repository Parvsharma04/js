// Given an array of transactions, each represented as an object with type ('deposit' or 'withdraw') and amount, calculate and print the total balance after all transactions using the forEach() method.

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdraw", amount: 500 },
  { type: "deposit", amount: 200 },
  { type: "withdraw", amount: 300 },
  { type: "deposit", amount: 1500 },
  { type: "withdraw", amount: 200 },
];

let balance = 0;

transactions.forEach((obj) => {
  if (obj.type == "deposit") balance += obj.amount;
  else balance -= obj.amount;
});

console.log(balance);
