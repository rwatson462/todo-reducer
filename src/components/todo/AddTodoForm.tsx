import {createRef, FormEvent} from "react";
import {uniqueId} from "../../lib/unique-id/uniqueId.ts";
import {useTodoActions} from "../../lib/todo/useTodoActions.ts";

export function AddTodoForm() {
  const inputRef = createRef<HTMLInputElement>()
  const { create: createNewTodo } = useTodoActions()

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()  // required as this is a form submit event

    createNewTodo({title: inputRef.current!.value, complete: false, id: uniqueId()})
    
    inputRef.current!.value = ''
  }

  return (
    <form className={'py-4 space-x-2 flex items-center'} onSubmit={addTodo}>
      <input
        className={'text-slate-950 rounded shadow px-1 py-0.5 text-sm'}
        type={'text'}
        ref={inputRef}
        placeholder={"create new todo"}
      />
      <button className={'rounded border-slate-50 text-xs uppercase px-2 py-1 bg-slate-700'}>Create</button>
    </form>
  )
}
