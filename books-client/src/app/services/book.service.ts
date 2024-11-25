import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from '@/types/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = process.env['API_URL'] ?? 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${id}`);
  }

  createBook(book: Omit<Book, '_id'>): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }

  updateBook(id: string, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/books/${id}`, book);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`);
  }
}

