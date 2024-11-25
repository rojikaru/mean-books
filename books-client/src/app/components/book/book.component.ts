import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  imports: [
    NgIf,
    RouterLink,
  ],
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.bookService.getBook(id)
      .subscribe({
        next: book => this.book = book,
        error: error => console.error('Error loading book:', error),
      })
  }
}

