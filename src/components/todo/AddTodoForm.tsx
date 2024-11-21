import {FormEvent, useState} from "react";
import {nextId} from "../../lib/todo/nextId.ts";
import {useTodoActions} from "../../lib/todo/useTodoActions.ts";

export function AddTodoForm() {
  const { create: createNewTodo } = useTodoActions()
  const [newTodoTitle, setNewTodoTitle] = useState<string>('')

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()  // required as this is a form submit event

    createNewTodo({title: newTodoTitle, complete: false, id: nextId()})
    
    setNewTodoTitle('')
  }

  return (
    <form className={'py-4 space-x-2 flex items-center'} onSubmit={addTodo}>
      <input className={'text-slate-950 rounded shadow px-1 py-0.5 text-sm'} type={'text'} value={newTodoTitle}
             onChange={e => setNewTodoTitle(e.currentTarget.value)} placeholder={"create new todo"}/>
      <button className={'rounded border-slate-50 text-xs uppercase px-2 py-1 bg-slate-700'}>Create</button>
    </form>
  )
}
