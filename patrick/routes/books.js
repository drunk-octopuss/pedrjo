import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let books = [];

router.get('/', (req, res) => {
    res.send(books);
});

router.post('/', (req, res) => {
    const book = req.body;
    books.push({ ... book, id: uuidv4() });
    res.send(`"${book.bookTitle}" (${book.bookYear}) by ${book.bookAuthor} has been added to the database.`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const findBookById = books.find((book) => book.id === id);
    res.send(findBookById);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter((book) => book.id !== id);
    res.send(`Book with ID: ${id} has been deleted.`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { bookAuthor, bookTitle, bookYear} = req.body;
    const book = books.find((book) => book.id === id);
    if(bookAuthor) book.bookAuthor = bookAuthor;
    if(bookTitle) book.bookTitle = bookTitle;
    if(bookYear) book.bookYear = bookYear;
    res.send(`Book with ID: ${id} has been updated.`);
});

export default router;