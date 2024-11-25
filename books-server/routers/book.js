import {Router} from "express";
import {Book} from "../database/schemas/book.js";

const bookRouter = Router();

bookRouter.get('/', async (req, res, next) => {
    try {
        const filter = req.body ?? {};
        const books = await Book.find(filter);
        res.json(books);
    } catch (error) {
        next(error);
    }
});

bookRouter.get('/:id', async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        next(error);
    }
});

bookRouter.get('/isbn/:isbn', async (req, res, next) => {
    try {
        const book = await Book.findOne({isbn: req.params.isbn});
        res.json(book);
    } catch (error) {
        next(error);
    }
});

bookRouter.post('/', async (req, res, next) => {
    try {
        let book = new Book(req.body);
        book = await book.save();
        res.json(book);
    } catch (error) {
        next(error);
    }
});

bookRouter.put('/:id', async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.json(book);
    } catch (error) {
        next(error);
    }
})

bookRouter.delete('/:id', async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (error) {
        next(error);
    }
});

bookRouter.delete('/isbn/:isbn', async (req, res, next) => {
    try {
        const book = await Book.findOneAndDelete({isbn: req.params.isbn});
        res.json(book);
    } catch (error) {
        next(error);
    }
});

export default bookRouter;
