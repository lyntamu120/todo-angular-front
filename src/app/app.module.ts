import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { HeaderComponent } from './header/header.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoAddComponent,
    HeaderComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
