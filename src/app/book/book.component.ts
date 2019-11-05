import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {IBook} from "../book.interface";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];

  constructor(private bookService: BookService) {
    this.bookService.getList().subscribe(next => {
      this.bookList = next;
    });  }

  ngOnInit() {
  }

}
