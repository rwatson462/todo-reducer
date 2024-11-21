
export interface Todo {
  title: string;
  complete: boolean;
  id: number;
}

export type TodoReducerActionType = 'create' | 'complete' | 'delete'

export interface TodoReducerAction {
  type: TodoReducerActionType
  payload: Todo
}
