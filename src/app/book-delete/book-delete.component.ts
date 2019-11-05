import {Component, OnInit} from '@angular/core';
import {IBook} from "../book.interface";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: IBook;
  bookList: IBook[];

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  deleteBook(i: number) {
    this.bookService.deleteBook(i).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== i);
    }, this.errorHandle);
  }

  errorHandle(error: any) {
    alert('Error, contact admin for more information !!!');
  }
}
