import {  createReducer, on } from "@ngrx/store";
import { addTask, removeTask, tasksLoaded } from "./todo.actions";
import { Task } from "../todo.model";

export interface TodoState{
    tasks:Task[];
}

export const initialState : TodoState={
    tasks:[]
};

const _todoReducer = createReducer(
    initialState,
    on(tasksLoaded,(state,{tasks})=>({...state,tasks:tasks})),
    on(addTask , (state,{task})=>({...state,tasks:[...state.tasks,task]})),
    on(removeTask , (state,{id})=>({...state,tasks:state.tasks.filter(t=>t.id!==id)}))
)

export function todoReducer(state,action) {
    return _todoReducer(state, action);
  }
  