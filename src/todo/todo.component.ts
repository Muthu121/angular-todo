// todo.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './todo.model';
import { loadTasks,addTask,removeTask } from './state/todo.actions';

@Component({
  selector: 'app-todo',
  template: `
    <div *ngFor="let task of tasks$ | async">
      {{ task.title }}
      <button (click)="removeTask(task.id)">Remove</button>
    </div>
    <input type="text" [(ngModel)]="newTaskTitle">
    <button (click)="addTask()">Add Task</button>
  `
})
export class TodoComponent implements OnInit {
  tasks$: Observable<Task[]>;
  newTaskTitle: string;

  constructor(private store: Store<{ todo: { tasks: Task[] } }>) { }

  ngOnInit() {
    this.tasks$ = this.store.pipe(select('todo', 'tasks'));
    this.store.dispatch(loadTasks());
  }

  addTask() {
    const newTask: Task = { id: Math.random().toString(), title: this.newTaskTitle };
    this.store.dispatch(addTask({ task: newTask }));
    this.newTaskTitle = ''; // Clear input
  }

  removeTask(taskId: string) {
    this.store.dispatch(removeTask({ taskId }));
  }
}
