// todo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../todo.service';
import { loadTasks, tasksLoaded } from './todo.actions';

@Injectable()
export class TodoEffects {

  // Effect to load tasks from the backend
  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadTasks), // Listen for the 'Load Tasks' action
    mergeMap(() => this.todoService.getTasks().pipe( // Fetch tasks from the service
      map(tasks => tasksLoaded({ tasks })), // Dispatch 'Tasks Loaded' action on success
      catchError(() => of({ type: 'Load Tasks Error' })) // Handle errors
    ))
  ));

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
