import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  // Used to import services
  constructor(private todoService:TodoService) { }

  // Life-Cycle method
  // Works like constructor
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // console.log('Delete me');
  
    // Delete from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    
    // Remove from Server
    this.todoService.deleteTodo(todo).subscribe();
  }
  
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
