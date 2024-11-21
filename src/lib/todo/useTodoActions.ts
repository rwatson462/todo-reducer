import {useTodoContext} from "./useTodoContext.ts";
import {Uuid} from "../unique-id/types";
import {Todo} from "./types";
import {useMemo} from "react";

export function useTodoActions() {
  const { dispatch } = useTodoContext()

  return useMemo(() => ({
    complete: (id: Uuid) => dispatch({type: 'complete', id}),
    create: (payload: Todo) => dispatch({type: 'create', payload}),
    delete: (id: Uuid) => dispatch({type: 'delete', id}),
  } as const), [dispatch])
}
