import {useLocalStorage} from "../../lib/local-storage/useLocalStorage.ts";

export function ClearDataButton() {
  const localStorage = useLocalStorage()

  function clearDataAndReload() {
    localStorage.remove('todos')
    location.reload()
  }

  return (
    <button className={'bg-slate-600 rounded border border-slate-400 px-2 py-1'} onClick={clearDataAndReload}>Clear data and reload</button>
  )
}