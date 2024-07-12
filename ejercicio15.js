const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
};

console.log(swap(fantasticFour, 0, 2));
console.log(swap(fantasticFour, 1, 3));
