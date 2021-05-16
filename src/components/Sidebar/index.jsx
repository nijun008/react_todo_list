import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

import './sidebar.scss'

function TodayIcon () {
  return (
    <span className="today-icon">{ new Date().getDate() }</span>
  )
}

class Sidebar extends Component {

  state = {
    links: [
      { path: '/home', title: '首页', icon: <HomeOutlined /> },
      { path: '/today', title: '今天', icon: <TodayIcon /> },
      { path: '/schedule', title: '日程', icon: <CalendarOutlined /> }
    ]
  }
  render() {
    return (
      <div className={`app-sidebar ${this.props.sidebarVisible ? '': 'sidebar-hidden'}`}>
        <ol>
        {
          this.state.links.map((linkObj, index) => (
            <li className="nav-item" key={ index }>
              <NavLink to={ linkObj.path }>
                <span className="nav-icon">{ linkObj.icon }</span>
                <span>{ linkObj.title }</span>
              </NavLink>
            </li>
          ))
        }
        </ol>
      </div>
    )
  }
}

export default connect(
  state => ({ sidebarVisible: state.showSidebar }),
  {}
)(Sidebar)
