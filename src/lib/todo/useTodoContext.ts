import {useContext} from "react";
import {todoContext} from "./todoContext.ts";

export function useTodoContext() {
  const context = useContext(todoContext)

  if (context === undefined) {
    throw new Error('Context used outside of provider')
  }

  return context
}
