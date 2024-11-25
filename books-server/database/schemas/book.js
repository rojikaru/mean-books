import dbClient from "../client.js";
import {Schema} from "mongoose";

const BookSchema = new Schema({
    name: String,
    isbn: {
        type: String,
        index: true,
    },
    author: String,
    pages: Number,
});
const Book = dbClient.model('Book', BookSchema);

export {Book, BookSchema};
