import {Routes} from '@angular/router';
import {HomeComponent} from '@/components/home/home.component';
import {BooksComponent} from '@/components/books/books.component';
import {BookComponent} from '@/components/book/book.component';
import {CreateBookComponent} from '@/components/create-book/create-book.component';
import {EditBookComponent} from '@/components/edit-book/edit-book.component';
import {NotFoundComponent} from '@/components/not-found/not-found.component';

export const routes: Routes = [
  {
    title: 'Home',
    component: HomeComponent,
    path: '',
  },
  {
    title: 'Books',
    component: BooksComponent,
    path: 'books',
  },
  {
    title: 'Book',
    component: BookComponent,
    path: 'book/:id',
  },
  {
    title: 'Create Book',
    component: CreateBookComponent,
    path: 'books/create',
    pathMatch: 'full',
  },
  {
    title: 'Edit Book',
    component: EditBookComponent,
    path: 'book/:id/edit',
  },
  {
    title: '404',
    component: NotFoundComponent,
    path: '**',
  }
];
