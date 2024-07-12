const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

const findArrayIndex = (array, text) => {
  for (let i = 0; i < array.length; i++) {
    if (text === array[i]) {
      return i;
    }
  }
  return -1;
};

/*console.log(findArrayIndex(mainCharacters, 'Leia'));
console.log(findArrayIndex(mainCharacters, 'Han Solo'));
console.log(findArrayIndex(mainCharacters, 'Rey'));
console.log(findArrayIndex(mainCharacters, 'Peter Petrelli'));*/

const removeItem = (array, text) => {
  const removed = findArrayIndex(array, text);
  if (removed !== -1) {
    array.splice(removed, 1);
  }
  return removed;
};

console.log(removeItem(mainCharacters, 'Han Solo'));
console.log(removeItem(mainCharacters, 'Anakin'));
console.log(removeItem(mainCharacters, 'Leia'));
console.log(mainCharacters);
