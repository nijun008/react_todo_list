import { ADD_TODO, REMOVE_TODO, SET_COMPLETED, EDIT_TODO } from '../constant'

const setDone = (preState, data) => {
  const list = [...preState]
    for (let i = 0, length = list.length; i < length; i ++) {
      if (list[i].id === data.id) {
        list[i].isCompleted = true
        break
      }
    }
    return list
}

const changeTodo = (preState, data) => {
  const list = [...preState]
    for (let i = 0, length = list.length; i < length; i ++) {
      if (list[i].id === data.id) {
        list[i] = { ...data }
        break
      }
    }
    return list
}

const LOCAL_TODO_LIST = 'todoList'

function syncListToLocal (data) {
  const itemData = JSON.stringify(data)
  localStorage.setItem(LOCAL_TODO_LIST, itemData)
}

function getListFormLocal () {
  const itemData = localStorage.getItem(LOCAL_TODO_LIST)
  return itemData ? JSON.parse(itemData) : []
}

const initTodos = getListFormLocal()

export default function todosReducer (preState = initTodos, action) {
  
  const { type, data } = action

  let newData
  switch (type) {
    case ADD_TODO:
      newData = [data, ...preState]
      syncListToLocal(newData)
      return newData
    case REMOVE_TODO:
      newData = preState.filter(todo => todo.id !== data.id)
      syncListToLocal(newData)
      return newData
    case SET_COMPLETED:
      newData = setDone(preState, data)
      syncListToLocal(newData)
      return newData
    case EDIT_TODO:
      newData = changeTodo(preState, data)
      syncListToLocal(newData)
      return newData
    default:
      return preState
  }
}