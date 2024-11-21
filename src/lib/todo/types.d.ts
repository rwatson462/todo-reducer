import {Uuid} from "../unique-id/types";

export interface Todo {
  title: string;
  complete: boolean;
  id: Uuid;
}

export type TodoReducerActionType = 'create' | 'complete' | 'delete'

export type TodoReducerAction =
  | { type: 'create', payload: Todo }
  | { type: 'complete', id: Uuid }
  | { type: 'delete', id: Uuid }
