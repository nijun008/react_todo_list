import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../constant'

export const hideSidebar = data => ({ type: HIDE_SIDEBAR, data })

export const showSidebar = data => ({ type: SHOW_SIDEBAR, data })
