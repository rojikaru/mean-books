import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';

@Component({
  selector: 'app-create-book',
  standalone: true,
  templateUrl: './create-book.component.html',
  imports: [
    FormsModule,
  ],
})
export class CreateBookComponent {
  book: Omit<Book, '_id'> = {
    name: '',
    isbn: '',
    author: '',
    pages: 0,
  };
  fields: {
    name: keyof Omit<Book, '_id'>,
    label: string,
    type: string,
  }[]

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {
    this.fields = [
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'isbn', label: 'ISBN', type: 'text' },
      { name: 'author', label: 'Author', type: 'text' },
      { name: 'pages', label: 'Pages', type: 'number' },
    ];
  }

  onSubmit() {
    this.bookService.createBook(this.book)
      .subscribe({
        next: () => this.router.navigate(['/books']),
        error: (error) => console.error('Error creating book:', error),
      });
  }
}
