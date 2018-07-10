import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";
   todos = [{
     isChecked: false,
     name:"mow lawn",
    },
    {
      isChecked: true,
      name:" eat icecream",
    },
    {
      isChecked: false,
      name:"Watch anime"
    }
   ];
   checkOffTodo(todo) {
     todo.isChecked = !todo.isChecked;
   }

  createTodo(){
    let trimmedInput = this.todoInput.trim();
  if(this.todoInput != ""){
  this.todos.push({
    isChecked: false,
    name: this.todoInput
  });
};

  this.todoInput = "";
  }

  editTodo(todo){
    
    let index = this.todos.indexOf(todo);
    
    let oldTodo = this.todos[index].name
    
    this.todos[index].name = prompt("edit work", this.todos[index].name);

if (this.todos[index].name == null) {
  this.todos[index].name = oldTodo;
} 
 }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 3);
  }

  deleteAllTodos() {
    this.todos = [];
  }
  
}