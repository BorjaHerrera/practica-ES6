// 3.1
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

// 3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toy2 = { ...toy };

console.log(toy2);

// 3.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsList3 = [...pointsList1, ...pointsList2];
console.log('lista1', pointsList1);
console.log('lista2', pointsList2);
console.log('nuevo array', pointsList3);

// 3.4
const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const toyfusion = { ...toy1, ...toyUpdate };
console.log('nuevo objeto', toyfusion);

// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log('array original', colors);
console.log('nuevo array', colorsCopy);
