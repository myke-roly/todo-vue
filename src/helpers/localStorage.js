const nameStorage = 'todo_vue'

export function setStorage (data) {
  localStorage.setItem(nameStorage, JSON.stringify(data))
}

export function getStorage () {
  const data = JSON.parse(localStorage.getItem(nameStorage))

  return data
}

export function updateItemStorage (id, newData) {
  const data = getStorage()
  const updateData = data.map((item) => {
    if (data.id === id) {
      return { ...item, title: newData }
    } else return item
  })

  setStorage(updateData)
}

export function deleteItemStorage (id) {
  const data = getStorage()
  const deleteItem = data.filter(item => item.id !== id)

  setStorage(deleteItem)
}

export function deleteStorage () {
  localStorage.removeItem(nameStorage)
}
