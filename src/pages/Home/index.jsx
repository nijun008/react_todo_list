import React, { Component } from 'react'
import './home.scss'
import { Empty } from 'antd'
import { connect } from 'react-redux'

import { setCompleted, removeTodo } from '../../redux/actions/todos'
import AddTodo from '../../components/AddTodo'
import TodoItem from '../../components/TodoItem'

class Home extends Component {

  todoHandler = (handleType, targetTodo) => {

    switch (handleType) {
      case 'completed':
        console.log('completed')
        this.props.setCompleted(targetTodo)
        break
      case 'edit':
        console.log('edit')
        break
      case 'delete':
        this.props.removeTodo(targetTodo)
        break
      default:
        break
    }
  }

  render() {
    const { todoList = [] } = this.props
    
    const list = [...todoList]
    list.sort((a, b) => a.prioLv - b.prioLv)

    return (
      <div className="home-page-wrapper">
        <h3 className="home-title">全部任务</h3>
        <div className="todo-list-wrapper">
          {
            list.length 
            ? (list.map(todoObj => (
                <TodoItem key={todoObj.id} todoData={todoObj} todoHandler={ (handleType) => this.todoHandler(handleType, todoObj) } />
              )))
            : <Empty description="所有任务都完成啦，放松一下吧！" />
          }
        </div>
        <AddTodo />
      </div>
    )
  }
}

export default connect(
  state => ({ todoList: state.todoList }),
  {
    removeTodo,
    setCompleted
  }
)(Home)
