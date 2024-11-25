import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from '@/types/book.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/book`);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/book/${id}`);
  }

  createBook(book: Omit<Book, '_id'>): Observable<Book> {
    return this.http.post<Book>(`${environment.apiUrl}/book`, book);
  }

  updateBook(id: string, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`${environment.apiUrl}/book/${id}`, book);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/book/${id}`);
  }
}

