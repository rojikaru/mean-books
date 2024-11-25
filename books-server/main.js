import express from 'express';
import cors from 'cors';
import bookRouter from "./routers/book.js";
import catchAllRouter from "./routers/catch-all.js";
import handleError from "./middleware/error.js";

async function main() {
    const app = express();
    const port = +process.env.PORT ?? 3000;

    // Middleware
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // Routes
    app.use('/api/book', bookRouter);
    app.use(catchAllRouter);

    // Error handling middleware
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
