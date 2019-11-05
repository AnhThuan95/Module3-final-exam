import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";


const routes: Routes = [{
  path: 'book',
  component: BookComponent
}, {
  path: 'create',
  component: BookCreateComponent
}, {
  path: 'detail/:id',
  component: BookDetailComponent
}, {
  path: 'edit/:id',
  component: BookEditComponent
}, {
  path: 'delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
