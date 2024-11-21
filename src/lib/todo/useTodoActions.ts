import {useTodoContext} from "./useTodoContext.ts";
import {Todo, TodoReducerActionType} from "./types";

export function useTodoActions(): Record<TodoReducerActionType, (payload: Todo) => void> {
  const { dispatch } = useTodoContext()

  return {
    complete: (payload) => dispatch({type: 'complete', payload}),
    create: (payload) => dispatch({type: 'create', payload}),
    delete: (payload) => dispatch({type: 'delete', payload}),
  }
}
