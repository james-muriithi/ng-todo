import { Component } from '@angular/core';
import { Todo } from './todo-item/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-todo';
  todos: Todo[] = [];

  addTodo(newTask: string): void {
    this.todos.unshift({
      todo: newTask,
      created_at: new Date(),
      completed: false,
      completed_at: null,
    });
  }

  removeTodo(){

  }
}
