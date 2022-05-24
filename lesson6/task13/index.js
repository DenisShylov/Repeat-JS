const withdraw = (clients, balances, client, amount) => {
  for (let i = 0; i < clients.length; i++) {
    clients[i] === balances[i];
    if (client === clients[i] && balances[i] > amount) {
      return balances[i] - amount;
    }
  }
  return -1;
};
console.log(withdraw(['John', 'Ann', 'Tom'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['John', 'Ann', 'Tom'], [1400, 87, -6], 'Ann', 50));
console.log(withdraw(['John', 'Ann', 'Tom'], [1400, 87, -6], 'Tom', 50));
