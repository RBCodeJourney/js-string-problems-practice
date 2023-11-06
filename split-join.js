const lyrics = 'Tumi bondhu kal pakhi ami jeno ki .bosonto kale tomai bolte parini.kala kala sada sada ';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('')
// console.log(chars);

const partial = lyrics.slice(5, 8);

console.log(partial);
const partial2 = lyrics.substring(5, 8)
console.log(partial2);

const lines = [
    'Tumi bondhu kal pakhi ami jeno ki ',
  'bosonto kale tomai bolte pari ni',
  'kala kala sada sada '
]

const newSong = lines.join('. ')
console.log(newSong);