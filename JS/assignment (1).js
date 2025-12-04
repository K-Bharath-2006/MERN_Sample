const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5

let a1 = books.filter((el) => {
    return el.rating > 4.5;
}).map((el) => el.bookName).join(" | ");

console.log(a1);
// 2. Get the names of all books published after 2020

let a2 = books.filter((el) => {
    return el.publishedYear > 2020;
}).map((el) => el.bookName).join(" | ");

console.log(a2);

// 3. Calculate the total price of all Programming books

let a3 = books.filter((el) => {
    return el.category === "Programming";
}).reduce((acc,el) => acc + el.price,0);

console.log(a3);

// 4. Find the average number of pages of all books in the Design category

let a4 = books.filter((el) => {
    return el.category === "Design";
});
let avg = a4.reduce((acc,el) => acc + el.pages,0) / a4.length;

console.log(avg);

// 5. Get a list of authors who have written books with a rating less than 4.0

let a5 = books.filter((el) => {
    return el.rating < 4.0;
}).map((el) => el.author).join(" | ");

console.log(a5);

// 6. Find the most expensive book in the collection

let max = 0;
let a6 = books.reduce((max,el) => {
    return Math.max(el.price);
});

let exp = books.filter((el) => {
    return el.price === a6;
}).map((el) => el.bookName).join(" | ");

console.log(exp);

// 7. Get all books that have more than 300 pages and are priced below 500

let a7 = books.filter((el) => {
    return el.pages > 300 && el.price < 500;
}).map((el) => el.bookName).join(" | ");

console.log(a7);
// 8. Create a new array with book names and their respective authors

let ans = [];
let a8 = books.filter((el) => {
    ans.push(el.bookName+" -> "+el.author);
});

console.log(ans);