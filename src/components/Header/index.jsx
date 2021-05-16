import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showSidebar, hideSidebar } from '../../redux/actions/sidebar'

import { Row, Switch } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, BulbOutlined, ThunderboltFilled } from '@ant-design/icons'

import './header.scss'

class Header extends Component {
  
  sidebarTrigger = () => {
    const { sidebarVisible } = this.props
    sidebarVisible ? this.props.hideSidebar(false) : this.props.showSidebar(true)
  }

  render () {
    return (
      <header className="app-header">
        <Row className="header-row" justify="space-between" align="middle">
          <div className="header-left">
            { 
              (
                this.props.sidebarVisible
                ? <MenuFoldOutlined onClick={ this.sidebarTrigger } />
                : <MenuUnfoldOutlined onClick={ this.sidebarTrigger } /> 
              )
            }
          </div>
          <Row className="header-right" align="middle">
            <div>Add</div>
            <div>0/5</div>
            <div>userName</div>
            <div>
              <Switch
                checkedChildren={<ThunderboltFilled />}
                unCheckedChildren={<BulbOutlined />}
              />
            </div>
          </Row>
        </Row>
      </header>
    )
  }
}

export default connect(
  state => ({ sidebarVisible: state.showSidebar }),
  {
    showSidebar,
    hideSidebar
  }
)(Header)