const nameStorage = 'todo_vue'

export function setStorage (data) {
  localStorage.setItem(nameStorage, JSON.stringify(data))
}

export function getStorage () {
  const data = JSON.parse(localStorage.getItem(nameStorage))

  return data || []
}

export function deleteStorage () {
  localStorage.removeItem(nameStorage)
}
