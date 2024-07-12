let randomNumber = null;

const rollDice = (sides) => {
  randomNumber = Math.floor(Math.random() * sides) + 1;
};
rollDice(24);
console.log(randomNumber);

/*
const rollDice = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

console.log(rollDice(6));
console.log(rollDice(12));
console.log(rollDice(24));
*/
