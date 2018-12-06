import { BookService } from './../../shared/services/book.service';
import { Book } from './../../shared/models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks(): void {
    this.bookService.getAllBooks().subscribe((data: [Book]) => {
      this.books = data;
    });
  }
}
