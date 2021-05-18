import React from 'react'
import { Row, Dropdown, Menu } from 'antd'


import './todoitem.scss'

const DropDownMenu =  (props) => {
  return (
    <Menu>
      <Menu.Item onClick={ () => props.todoHandler('edit') }>编辑</Menu.Item>
      <Menu.Item>优先级</Menu.Item>
      <Menu.Item onClick={ () => props.todoHandler('delete') }>删除</Menu.Item>
    </Menu>
  )
}

const TodoItem = (props) => {
  const { content, prioLv, isCompleted }  = props.todoData

  const todoHandler = (handleType) => {
    props.todoHandler(handleType)
  }

  return(
    <Row className="todo-list-item" justify="space-between">
      <Row className="todo-main">
        <div className="todo-checkbox">
          <div className={`icon icon-${prioLv} ${isCompleted ? 'todo-completed' : null }`}></div>
        </div>
        <div className="todo-content">{ content }</div>
      </Row>
      <div className="todo-menu">
        <Dropdown overlay={ () => <DropDownMenu todoHandler={ todoHandler } /> }>
          <span>...</span>
        </Dropdown>
      </div>
    </Row>
  )
}

export default TodoItem