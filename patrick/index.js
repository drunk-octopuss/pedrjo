import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/books', booksRoutes);
app.get('/', (req, res) => res.send('Testing homepage (GET REQ)'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))