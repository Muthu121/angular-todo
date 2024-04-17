// todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // Method to fetch tasks from the backend
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks');
  }

  // Method to add a new task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>('api/tasks', task);
  }

  // Method to remove a task
  removeTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`api/tasks/${taskId}`);
  }
}
