import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './book/book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';

export const routes: Routes = [
  {
    "path": "",
    "title": "Home",
    "component": HomeComponent,
  },
  {
    "path": "books",
    "title": "Books",
    "component": BooksComponent,
  },
  {
    "path": "books/:id",
    "title": "Book Details",
    "component": BookComponent,
  },
  {
    "path": "books/new",
    "title": "Add Book",
    "component": CreateBookComponent,
  },
  {
    "path": "books/:id/edit",
    "title": "Edit Book",
    "component": EditBookComponent,
  },
];
