import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  imports: [
    FormsModule,
    NgIf,
  ],
})
export class EditBookComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.bookService.getBook(id)
      .subscribe({
        next: (book) => this.book = book,
        error: (error) => console.error('Error loading book:', error),
      });
  }

  onSubmit() {
    if (!this.book) return;

    this.bookService.updateBook(this.book._id, this.book)
      .subscribe({
        next: () => this.router.navigate(['/books']),
        error: (error) => console.error('Error updating book:', error),
      });
  }
}

