import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "./book.interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }

  getList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.API_URL}`);
  }

  deleteBook(id: number): Observable<any> {
    const r = confirm('Bạn Muốn Xoá Không?\nChọn OK hoặc Cancel.');
    if (r) {
      return this.http.delete(`${this.API_URL}/${id}`);
    }
  }

  createBook(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(`${this.API_URL}`, post);
  }

  updateBook(post: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.API_URL}/${post.id}`, post);

  }
}
