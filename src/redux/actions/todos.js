import { ADD_TODO, REMOVE_TODO, DONE_TODO, EDIT_TODO } from '../constant'

export const addTodo = data => ({ type: ADD_TODO, data })

export const removeTodo = data => ({ type: REMOVE_TODO, data })

export const doneTodo = data => ({ type: DONE_TODO, data })

export const editTodo = data => ({ type: EDIT_TODO, data })
