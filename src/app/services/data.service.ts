import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BASE_URL = 'https://62b965c0ff109cd1dc911428.mockapi.io/todo'

  public todos = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {
    this.getAllTodos().subscribe({
      next: todos => this.todos.next(todos),
      error: err => console.log(err),
    })
  }

  getAllTodos(){
    return this.http.get<Todo[]>(this.BASE_URL);
  }

  getActiveTodos(){
    return this.todos.pipe(
      map(todos => todos.filter(todo => !todo.doneDate))
    )
  }

  getDoneTodos(){
    return this.todos.pipe(
      map(todos => todos.filter(todo => todo.doneDate))
    )
  }

  deleteTodo(todo: Todo){
    const url = this.BASE_URL + '/' + todo.id
    this.http.delete(url).subscribe({
      next: r => {
        const newArray = this.todos.value.filter(t => t !== todo);
        this.todos.next(newArray);
      },
      error: err => console.log(err)
    })
  }

  completeTodo(todo: Todo) {
    const url = this.BASE_URL + '/' + todo.id;
    const completedTodo = todo;
    completedTodo.priority = -1;
    completedTodo.doneDate = new Date().getTime() / 1000;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put<Todo>(url, completedTodo, {headers}).subscribe({
      next: todo => {
        const newArray = [...this.todos.value]
        this.todos.next(newArray);
      },
      error: err => console.log(err)
    })

  }

  saveTodo(todo: Todo) {
    const url = this.BASE_URL + '/' + todo.id;

      
  }
}

