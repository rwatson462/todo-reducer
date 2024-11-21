import {TodoProvider} from "./components/todo/TodoProvider.tsx";
import {TodoList} from "./components/todo/TodoList.tsx";
import {AddTodoForm} from "./components/todo/AddTodoForm.tsx";
import {ClearDataButton} from "./components/todo/ClearDataButton.tsx";

export function App() {
  return (
    <>
      <header>
        <h1 className={'text-3xl font-bold'}>useReducer demo</h1>
      </header>
      <main className={'py-8'}>
        <TodoProvider>
          <TodoList/>
          <AddTodoForm/>
        </TodoProvider>
      </main>
      <footer className={'p-8 text-right'}>
        <ClearDataButton/>
      </footer>
    </>
  )
}
