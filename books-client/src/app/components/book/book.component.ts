import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {BookService} from '@/services/book.service';
import Book from '@/types/book.interface';

@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  imports: [
    RouterLink,
  ],
})
export class BookComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.bookService.getBook(id)
      .subscribe({
        next: book => this.book = book,
        // redirect to 404
        error: () => this.router.navigate(['/404']),
      })
  }
}

