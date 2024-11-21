import {useLocalStorage} from "../local-storage/useLocalStorage.ts";
import {Todo} from "./types";

export function useTodoPersistence(todos: Todo[]) {
  const localStorage = useLocalStorage()
  localStorage.set('todos', todos)
}
