import {PropsWithChildren, useReducer} from "react";
import {todoReducer} from "../../lib/todo/todoReducer.ts";
import { todoContext } from "../../lib/todo/todoContext.ts";
import { useLocalStorage } from "../../lib/local-storage/useLocalStorage.ts";
import {Todo} from "../../lib/todo/types";
import {useTodoPersistence} from "../../lib/todo/useTodoPersistence.ts";

export function TodoProvider({ children }: PropsWithChildren) {
  const localStorage = useLocalStorage()
  const [ todos, dispatch ] = useReducer(todoReducer, localStorage.get<Todo[]>('todos') || [])

  // this will sync with localstorage automatically as todos change
  useTodoPersistence(todos)

  return (
    <todoContext.Provider value={{todos, dispatch}}>
      {children}
    </todoContext.Provider>
  )
}
