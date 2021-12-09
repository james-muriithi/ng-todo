import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-todo';
  todos: string[] = [];

  addTodo(newTask: string): void {
    console.log(this);
    
    this.todos.push(newTask);
  }
}
