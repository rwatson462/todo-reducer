import {Todo, TodoReducerAction} from "./types";

type TodoState = Todo[]

export function todoReducer(state: TodoState, action: TodoReducerAction) {
  switch (action.type)
  {
    case 'CREATE':
      return [...state, action.payload]
    case 'COMPLETE':
      return state.map(todo => {
        console.log(todo.id, action.id)
        return todo.id === action.id ? {...todo, complete: true} : todo
      })
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id)
  }
}
