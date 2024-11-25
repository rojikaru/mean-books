import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  imports: [
    RouterLink,
  ],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks()
      .subscribe({
        next: (books) => this.books = books,
        error: (error) => console.error('Error loading books:', error),
      })
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id)
      .subscribe({
        next: () => this.loadBooks(),
        error: (error) => console.error('Error deleting book:', error),
      });
  }
}
