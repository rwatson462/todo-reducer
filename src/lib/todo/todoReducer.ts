import {Todo, TodoReducerAction} from "./types";

type TodoState = Todo[]

export function todoReducer(state: TodoState, action: TodoReducerAction) {
  switch (action.type)
  {
    case 'create':
      return [...state, action.payload]
    case 'complete':
      return state.map(todo => todo.id === action.payload.id ? {...todo, complete: true} : todo)
    case 'delete':
      return state.filter(todo => todo.id !== action.payload.id)
  }
}
