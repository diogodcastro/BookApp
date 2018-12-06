import { BookService } from './../shared/services/book.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, BookRoutingModule],
  exports: [],
  declarations: [BookListComponent],
  providers: [BookService]
})
export class BookModule {}
