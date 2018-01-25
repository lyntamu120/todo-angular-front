import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { HeaderComponent } from './header/header.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { SigninComponent } from './core/signin/signin.component';
import { SignupComponent } from './core/signup/signup.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodosComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoAddComponent,
    HeaderComponent,
    TodoItemComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
