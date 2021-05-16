import { combineReducers } from 'redux'

import sidebar from './sidebar'

import todos from './todos'

export default combineReducers({
  showSidebar: sidebar,
  todoList: todos
})