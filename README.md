# Todo reducer

A demo of React's useReducer hook

## Setup
1. Run `pnpm install` (or probably any node package manager)
2. Run `pnpm run dev`
3. Open your browser to `http://localhost:5173` to view the demo app


## What is useReducer?
`useReducer` is a React hook that is used to manage state in a more complex way than `useState`.
It is similar to Redux in that it uses a reducer function to update state based on an action.
It is useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## Layout of this demo

Starting in `App.tsx`, we load the `TodoProvider` which:
* Loads todos from localstorage (just to show off the app across page reloads)
* Initialises the `todoReducer` state to make the app reactive
* Renders the rest of the app

After that, we have the internals that bring this all together:

* `todoReducer` is the function that accepts an action and some values, then decides what to do whether that's create a 
new todo, mark one as completed, or delete one.
* `useTodoActions` is a convenience wrapper around the reducer that exposes specific functions that dispatch the actions
just to make the code a bit cleaner (in my opinion).
* `useTodoList` which just exposes the todos themselves.
 