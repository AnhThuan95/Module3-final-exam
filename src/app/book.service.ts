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

  getList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.API_URL}`);
  }

  createBook(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(`${this.API_URL}`, post);
  }

  getById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }

  deleteBook(id: number): Observable<IBook> {
      return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateBook(post: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.API_URL}/${post.id}`, post);

  }
}
