import React from 'react'
import { Row, Dropdown, Menu } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'


import './todoitem.scss'

const prioLvColor = ['#888', '#d1453b', '#eb8909', '#246fe0', '#888']

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
    <Row className={`todo-list-item ${isCompleted ? 'todo-completed' : null }`} justify="space-between">
      <Row className="todo-main">
        <div className="todo-checkbox">
          <div 
            className={`icon-box icon-${prioLv}`}
            onClick={() => todoHandler('completed')}>
            { 
              isCompleted
              ? <CheckCircleTwoTone twoToneColor={ prioLvColor[prioLv] } />
              : <div className={`icon icon-${prioLv}`}></div> 
            }
          </div>
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