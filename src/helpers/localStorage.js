const nameStorage = 'todo_vue'
const todos = JSON.parse(localStorage.getItem(nameStorage)) || []

export function setStorage (data) {
  localStorage.setItem(nameStorage, JSON.stringify(data))
}

export function getStorage () {
  return todos
}

export function todosSolveds () {
  return todos.filter(todo => todo.done).length
}

export function todosUnsolveds () {
  return todos.filter(todo => !todo.done).length
}

export function todosLength () {
  return todos.length
}

export function deleteStorage () {
  localStorage.removeItem(nameStorage)
}
