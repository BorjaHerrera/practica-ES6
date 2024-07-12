// 2.1
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};

const { title, gender, year } = game;

console.log('title', title);
console.log('gender', gender);
console.log('year', year);

// 2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log('fruit1', fruit1);
console.log('fruit2', fruit2);
console.log('fruit3', fruit3);

// 2.3
const animalFunction = () => {
  return { animalName: 'Bengal Tiger', race: 'Tiger' };
};

const { animalName, race } = animalFunction();

console.log(animalName);
console.log(race);

// 2.4

const car = { carName: 'Mazda 6', itv: [2015, 2011, 2020] };

const { carName, itv } = car;

const [year1, year2, year3] = itv;

console.log(carName);
console.log(itv);

console.log(year1);
console.log(year2);
console.log(year3);
