import { ADD_TODO, REMOVE_TODO, DONE_TODO, EDIT_TODO } from '../constant'

const setDone = (preState, data) => {
  const list = [...preState]
    for (let i = 0, length = list.length; i < length; i ++) {
      if (list[i].id === data.id) {
        list[i].isDone = true
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



const initTodos = []

export default function todosReducer (preState = initTodos, action) {
  
  const { type, data } = action

  switch (type) {
    case ADD_TODO:
      return [data, ...preState]
    case REMOVE_TODO:
      return preState.filter(todo => todo.id !== data.id)
    case DONE_TODO:
      return setDone(preState, data)
    case EDIT_TODO:
      return changeTodo(preState, data)
    default:
      return preState
  }
}