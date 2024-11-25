import express from 'express';
import bookRouter from "./routers/book.js";
import catchAllRouter from "./routers/catch-all.js";
import handleError from "./middleware/error.js";

async function main() {
    const app = express();
    const port = +process.env.PORT ?? 3000;

    // Register routes
    app.use('/api/book', bookRouter);
    app.use(catchAllRouter);

    // Register middleware
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(handleError);

    app.listen(port, 'localhost', () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main().catch((e) => {
    console.error(e);
    console.error('Failed to start server');
    process.exit(1);
});
