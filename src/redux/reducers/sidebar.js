import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../constant'

const LOCAL_SIDEBAR = 'showSidebar'

const initState = localStorage.getItem(LOCAL_SIDEBAR) === '0' ? false : true

export default function sidebarReducer (preState = initState, action) {
  const { type, data } = action

  switch (type) {
    case HIDE_SIDEBAR:
      localStorage.setItem(LOCAL_SIDEBAR, 0)
      return data
    case SHOW_SIDEBAR:
      localStorage.setItem(LOCAL_SIDEBAR, 1)
      return data
    default:
      return preState
  }
}