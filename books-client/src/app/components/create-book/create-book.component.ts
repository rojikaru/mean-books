import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  imports: [
    FormsModule,
  ],
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent {
  book: Omit<Book, '_id'> = {
    name: '',
    isbn: '',
    author: '',
    pages: 0,
  };

  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  onSubmit() {
    this.bookService.createBook(this.book)
      .subscribe({
        next: () => this.router.navigate(['/books']),
        error: (error) => console.error('Error creating book:', error),
      });
  }
}
