import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo';

@Component({
  selector: 'app-todos-section',
  templateUrl: './todos-section.component.html',
  styleUrls: ['./todos-section.component.scss'],
})
export class TodosSectionComponent implements OnInit {
  @Input() todos: Todo[] = [];

  @Input() removeTodo: (index:number) => void;

  constructor() {}

  ngOnInit(): void {}

  completedTodos(): Todo[] {
    return this.todos.filter((todo) => todo.completed);
  }

  incompleteTodos(): Todo[] {
    return this.todos.filter((todo) => !todo.completed);
  }
}
