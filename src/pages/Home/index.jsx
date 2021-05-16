import React, { Component } from 'react'

import './home.scss'

import AddTodo from '../../components/AddTodo'

export default class Home extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
        Home....
        <AddTodo />
      </div>
    )
  }
}
