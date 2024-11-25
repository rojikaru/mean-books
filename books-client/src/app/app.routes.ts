import {Routes} from '@angular/router';
import {HomeComponent} from '@/components/home/home.component';
import {BooksComponent} from '@/components/books/books.component';
import {BookComponent} from '@/components/book/book.component';
import {CreateBookComponent} from '@/components/create-book/create-book.component';
import {EditBookComponent} from '@/components/edit-book/edit-book.component';

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
