import {TodoItem} from "./TodoItem.tsx";
import {useTodoList} from "../../lib/todo/useTodoList.ts";

export function TodoList() {
  const todos = useTodoList()

  return (
    <ul className={'max-w-md w-md'}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
}
