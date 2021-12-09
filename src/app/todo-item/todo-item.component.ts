import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Input() index: number;

  @Input() removeTodo: (index: number) => void;

  notComplete: any;

  constructor() {}

  ngOnInit(): void {}

  completeTask() {
    this.todo.completed = true;
    this.todo.completed_at = new Date();
  }
  undoComplete() {
    this.todo.completed = false;
    this.todo.completed_at = null;
  }
}
