import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable()
export class BookService {
  private endpoint = 'book';

  constructor(private http: HttpClient) {}

  public getBook(bookId: string): Observable<Book> {
    return this.http.get<Book[]>(`${Constants.APP_DB}/${this.endpoint}/${bookId}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public getAllBooks(): Observable<[Book]> {
    return this.http.get(`${Constants.APP_DB}/${this.endpoint}`).pipe(
      map((response: [Book]) => {
        return response;
      })
    );
  }

  public newController(book: Book): Observable<Book> {
    return this.http
      .post(`${Constants.APP_DB}/${this.endpoint}`, book)
      .pipe(map((response: Book) => response));
  }

  public updateController(book: Book): Observable<Book> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .put<Book>(`${Constants.APP_DB}/${this.endpoint}/${book.id}`, Book, {
        headers: headers
      })
      .pipe(map((response: Book) => response));
  }

  public deleteController(book: Book): Observable<Book> {
    return this.http
      .delete<Book>(`${Constants.APP_DB}/${this.endpoint}/${book.id}`)
      .pipe(map((response: any) => response));
  }
}
