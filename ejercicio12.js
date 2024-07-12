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
    if (text === 'Rey') {
      return 'Rey, no deberías estar en esta lista';
    }

    if (text === array[i]) {
      return `La posición de ${text} es ${i}`;
    }
  }

  return 'No te encontramos';
};
console.log(findArrayIndex(mainCharacters, 'Leia'));
console.log(findArrayIndex(mainCharacters, 'Han Solo'));
console.log(findArrayIndex(mainCharacters, 'Rey'));
console.log(findArrayIndex(mainCharacters, 'Peter Petrelli'));
