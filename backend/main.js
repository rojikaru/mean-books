import express from 'express';
import bookRouter from "./routers/book/book-router.js";

async function main() {
    const app = express();
    const port = 4000;

    app.listen(port, 'localhost', () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // Register routes
    app.use('/api/books', bookRouter);
}

main().catch(console.error);
