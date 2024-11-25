import express from 'express';
import bookRouter from "./routers/book.js";
import catchAllRouter from "./routers/catch-all.js";

async function main() {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // Register routes
    app.use('/api/book', bookRouter);
    app.use(catchAllRouter);

    app.listen(port, 'localhost', () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main().catch(console.error);
