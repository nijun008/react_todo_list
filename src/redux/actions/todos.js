import { ADD_TODO, REMOVE_TODO, SET_COMPLETED, EDIT_TODO } from '../constant'

export const addTodo = data => ({ type: ADD_TODO, data })

export const removeTodo = data => ({ type: REMOVE_TODO, data })

export const setCompleted = data => ({ type: SET_COMPLETED, data })

export const editTodo = data => ({ type: EDIT_TODO, data })
