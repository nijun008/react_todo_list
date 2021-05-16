import React, { Component, Fragment } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Today from '../pages/Today'
import Schedule from '../pages/Schedule'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import './layout.scss'
import { connect } from 'react-redux'
import { Row } from 'antd'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Row className="app-container">
          <Sidebar />
          <div className={`app-main ${this.props.sidebarVisible ? '' : 'full-main'}`}>
            <Switch>
              <Route path="/home" component={ Home } />
              <Route path="/today" component={ Today } />
              <Route path="/schedule" component={ Schedule } />
              <Redirect to="/home" />
            </Switch>
          </div>
        </Row>
      </Fragment>
    )
  } 
}

export default connect(
  state => ({ sidebarVisible: state.showSidebar }),
  {}
)(Layout)