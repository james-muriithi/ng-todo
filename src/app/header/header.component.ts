import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  newTask: string = "clean";

  @Input() addTodo: any;

  constructor() { }

  addNewTask():any{
    if (this.newTask) {
      this.addTodo(this.newTask);
      this.newTask = "";
      return;
    }
    alert("Please enter a task first"); 
  }

  ngOnInit(): void {
  }

}
