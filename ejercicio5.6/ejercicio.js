const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const inputButton = document.querySelector(
  'input[data-function="toFilterStreamers"]'
);

const searchStreamers = () => {
  const streamerFound = streamers.filter((streamer) => {
    return streamer.name
      .toLowerCase()
      .includes(inputButton.value.toLowerCase());
  });
  console.log(streamerFound);
};
inputButton.addEventListener('input', searchStreamers);
