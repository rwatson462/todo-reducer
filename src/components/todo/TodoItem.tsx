import {Todo} from "../../lib/todo/types";
import {useTodoActions} from "../../lib/todo/useTodoActions.ts";

export function TodoItem({todo}: {todo: Todo}) {
  const { complete: completeTodo, delete: deleteTodo } = useTodoActions()

  return (
    <li className={'border-b border-b-slate-600 flex items-center justify-between hover:bg-slate-800 px-2 py-1 rounded'}>
      <div className={'flex gap-2 items-start'}>
        { todo.complete ? '✅' : '❌' }
        <p className={'flex flex-col items-start'}>
          <button onClick={() => completeTodo(todo.id)} className={'hover:underline'}>{todo.title}</button>
          <span className={'text-sm text-slate-400'}>{todo.id}</span>
        </p>
      </div>
      <p>
        <button onClick={() => deleteTodo(todo.id)} className={'text-xs underline'}>delete</button>
      </p>
    </li>
  )
}
