import { createAction,props } from "@ngrx/store";

import { Task } from "../todo.model";

export const loadTasks = createAction('[Todo] Load Taks');
export const tasksLoaded = createAction ('[Todo] Tasks Loaded successfully' , props<{tasks:Task[]}>());

export const addTask = createAction('[Todo] Add Task',props<{task:Task}>());
export const removeTask = createAction('[Todo] Remove Task',props<{id:string}>());