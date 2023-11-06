const lyrics = 'Tumi bondhu kal pakhi ami jeno ki .bosonto kale tomai bolte parini.kala kala sada sada ';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);


const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// --------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));
// 


if(lyrics.indexOf('sada') !== -1){
    console.log('exits inside the string');
}
else{
    console.log('cannot find');
}

// StartsWith
console.log(lyrics.startsWith('Tumi'));

// endswith 
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');
