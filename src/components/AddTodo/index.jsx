import React, { Component } from 'react'
import { Input, Button, Row, Radio } from 'antd'
import { connect } from 'react-redux'

import { addTodo, editTodo } from '../../redux/actions/todos'

import './addtodo.scss'

class AddTodo extends Component {

  inputChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="add-todo-wrapper">
        <Input
          style={{ paddingLeft: '0' }}
          bordered={false} 
          placeholder="输入待办，如：玩游戏" 
          allowClear
          onChange={this.inputChange}
        />
        <Row className="input-handle-row" justify="space-between" align="middle">
          <div>
            <Button type="primary">添加</Button>
          </div>
          <Row>
            <div>
              <Radio.Group defaultValue={4} title="优先级" buttonStyle="solid">
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
  todoList: state.todos
}), {
  addTodo,
  saveTodo: editTodo
})(AddTodo)
