import {createContext} from "react";
import {Todo, TodoReducerAction} from "./types";

interface TodoContext {
  todos: Todo[]
  dispatch: (action: TodoReducerAction) => void
}

export const todoContext = createContext<TodoContext>(undefined as unknown as TodoContext)
