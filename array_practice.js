const movies = ['A', 'B', 'C'];
console.log(movies.length);

movies.forEach((movie, index) => {
  console.log(`${index},${movie}`);
});

/*Assign an empty array to a variable named books.
Add ‘The Shining’ and ‘Pride and Prejudice’ or 2 other books of your choice to the books array.
console.log() the second element of books.
Update the second element by assigning to it ‘Dune’ or another book of your choice.
Iterate over the entire books array and console.log() each book string.*/
let books = [];
books.push('The Shining');
books.push('Pride and Prejudice');
console.log(books[1]);
books[1] = 'Dune';
books.forEach((book) => {
  console.log(book);
});
