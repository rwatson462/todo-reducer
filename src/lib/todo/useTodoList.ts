import {Todo} from "./types";
import {useTodoContext} from "./useTodoContext.ts";

export function useTodoList(): Todo[] {
  const { todos } = useTodoContext()

  return todos
}
