import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [{
      text: 'Some text',
      completed: true
  },
  {
      text: 'Some todos',
      completed: false
  }];
  constructor() { }

  ngOnInit() {
  }

}
