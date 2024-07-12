// 4.1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const usersName = users.map((user) => user.name);
console.log(usersName);

// 4.2
const newUsers = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const newUserName = newUsers.map((newUser) => newUser.name);

for (let i = 0; i < newUserName.length; i++) {
  if (newUserName[i].toLowerCase().startsWith('a')) {
    newUserName[i] = 'Anacleto';
  }
}
console.log(newUserName);

// 4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const citiesName = cities.map((city) => {
  if (city.isVisited === true) {
    return `${city.name}: Visitado`;
  } else {
    return city.name;
  }
});

console.log(citiesName);
