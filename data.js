//Set the title
var title = "Matilda";
console.log(title);

//Set the author
var author = "Roald Dahl";
console.log(author);

//Set the publication year
var year = 1988;
console.log(year);

//Set the millenial flag
var isNewerThan2000 = false;
if (year > 2000) {
    isNewerThan2000 = true;
}
console.log(isNewerThan2000);

//Set the age
var age = 2022 - isNewerThan2000;
console.log((2022-year));

//Set the characters
var characters = ['Matilda Wormwood' , 'Miss Honey' , 'Miss Trunchball' , 'Lavander' , 'Bruce Brogtrotter'];
console.log(characters);

//Display specific characters - the first and second characters
console.log(characters [0], characters[1]);

//Set favorite book
let favoriteBook = {title: 'Matilda' , author: "Roald Dahl" , year: 1988 , isNewerThan2000: false, characters: ['Matilda Wormwood' , 'Miss Honey' , 'Miss Trunchball' , 'Lavander' , 'Bruce Brogtrotter']};
console.log(favoriteBook);

//Display specific properties
console.log(favoriteBook.author);
console.log(favoriteBook.year);

//Display array item through an object
console.log(favoriteBook.characters[0]);

//Set the list of books
const favoriteBooks =[
    {bookno: 1, title: 'Matilda' , author: "Roald Dahl" , year: 1988 , isNewerThan2000: false, characters: ['Matilda Wormwood' , 'Miss Honey' , 'Miss Trunchball' , 'Lavander' , 'Bruce Brogtrotter']},
    {bookno: 2, title: 'Charlie and the chocolate factory' , author: "Roald Dahl" , year: 1964 , isNewerThan2000: false, characters: ['Willly Wonka' , 'Charlie Bucket' , 'Grandpa Joe' , 'Augustus Gloop' , 'Veruca Salt']}
];
console.log(favoriteBooks.map(({title, author, year, isNewerThan2000, characters}) => ({title, author, year, isNewerThan2000, characters})));

//Display object properties through an array
var title2 = favoriteBooks.find (item => item.bookno === 2);
console.log(title2.title);

var fistCharacters = favoriteBooks.find (item => item.bookno === 2);
console.log(fistCharacters.characters[0]);

//Calculate age difference between books
var age1 = favoriteBooks.find (item => item.bookno === 1);
var age2 = favoriteBooks.find (item => item.bookno === 2);
var ageBetween = (age1.year - age2.year);
if (ageBetween < 0) {
    console.log(ageBetween*(-1));
}
if (ageBetween >= 0) {
    console.log(ageBetween);
}
