const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" }
];


app.get('/books', (req, res) => {
    res.json(books);
});


app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.json(newBook);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
}); 
