import {Uuid} from "../unique-id/types";

export interface Todo {
  title: string;
  complete: boolean;
  id: Uuid;
}

export type TodoReducerAction =
  | { type: 'CREATE', payload: Todo }
  | { type: 'COMPLETE', id: Uuid }
  | { type: 'DELETE', id: Uuid }
