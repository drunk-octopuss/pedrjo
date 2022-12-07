import express from 'express';
import { getBooks, addBook, findBook, deleteBook, updateBook } from '../controllers/functions.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', findBook);
router.delete('/:id', deleteBook);
router.patch('/:id', updateBook);

export default router;