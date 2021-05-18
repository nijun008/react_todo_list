import React, { Component } from 'react'
import { Input, Button, Row, Radio } from 'antd'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo, editTodo } from '../../redux/actions/todos'

import './addtodo.scss'


const initForm = {
  id: '',
  prioLv: 4,
  content: '',
  isCompleted: false,
  tags: [],
  due: '',
  createDate: '',
  completedDate: ''
}
class AddTodo extends Component {

  state = {
    todoForm: { ...initForm },
    contentValue: ''
  }

  inputChange = (e) => {
    const value = e.target.value
    const { todoForm } = this.state
    todoForm.content = value.replace(/(^\s*)|(\s*$)/g, '')

    this.setState({
      todoForm,
      contentValue: value
    })
  }

  prioLvChange = (e) => {
    const { todoForm } = this.state
    todoForm.prioLv = e.target.value

    this.setState({ todoForm })
  }

  addTodoHandler = () => {
    const { todoForm } = this.state
    const id = uuidv4()

    this.props.addTodo({...todoForm, id})

    this.setState({
      todoForm: { ...initForm },
      contentValue: ''
    })
  }

  render() {
    return (
      <div className="add-todo-wrapper">
        <Input.TextArea
          value={ this.state.contentValue }
          style={{ paddingLeft: '0' }}
          bordered={false} 
          placeholder="输入待办，如：玩游戏" 
          allowClear
          onChange={ this.inputChange }
        />
        <Row className="input-handle-row" justify="space-between" align="middle">
          <div>
            <Button type="primary" disabled={ !this.state.todoForm.content } onClick={ this.addTodoHandler }>添加</Button>
          </div>
          <Row>
            <div>
              <Radio.Group
                defaultValue={4} 
                title="优先级" 
                buttonStyle="solid"
                value={ this.state.todoForm.prioLv }
                onChange={ this.prioLvChange }
                >
                <Radio.Button value={1}>高</Radio.Button>
                <Radio.Button value={2}>中</Radio.Button>
                <Radio.Button value={3}>低</Radio.Button>
                <Radio.Button value={4}>无</Radio.Button>
              </Radio.Group>
            </div>

            <div>
              
            </div>
          </Row>
        </Row>
      </div>
    )
  }
}

export default connect(state => ({
  todoList: state.todoList
}), {
  addTodo,
  saveTodo: editTodo
})(AddTodo)
