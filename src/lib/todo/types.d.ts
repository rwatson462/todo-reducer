
export type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface Todo {
  title: string;
  complete: boolean;
  id: UUID;
}

export type TodoReducerActionType = 'create' | 'complete' | 'delete'

export interface TodoReducerAction {
  type: TodoReducerActionType
  payload: Todo
}
