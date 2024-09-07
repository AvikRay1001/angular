import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  
  todoValue: string = '';
  list!: Todo[];

  ngOnInit(){
    this.list=[];
    this.todoValue = "";
  }

  addTodo(){
    if(this.todoValue !== ""){
      const newTodo: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newTodo);
    }
    this.todoValue = "";
  }

  deleteTodo(id:number){
    this.list = this.list.filter(item => item.id!== id);
  }

}
