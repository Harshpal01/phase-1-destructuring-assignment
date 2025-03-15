// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructure based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Assign four animals (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Assign three colors based on remaining animals
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure colors into variables
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure but skip indigo
const [r, o, y, g, b, , v] = colors;

// 6. Assign only indigo
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructure `muppet` object
const { muppetName, color, song, job, partner } = muppet;

// Nested Object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructure `nestedMuppet` object to get song2, song4, job, and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Export variables to make them available for testing
module.exports = {
  moo, neigh, baa, oink, cluck,
  bessie, dolly, babe, little,
  blackAndWhite, black, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, v, indg,
  muppetName, color, song, job, partner,
  song2, song4, nestedJob, nestedPartner
};