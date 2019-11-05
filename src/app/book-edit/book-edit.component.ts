import { Component, OnInit } from '@angular/core';
import {IBook} from "../book.interface";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  data: FormGroup;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      title: '',
      author: '',
      description: ''
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => {
        this.book = next;
        this.data.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  editBook() {
    this.bookService.updateBook(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
  }

}
