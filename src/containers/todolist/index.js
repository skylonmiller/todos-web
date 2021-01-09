/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import "./todo.css";
import { Button, message, Input, Checkbox } from "antd";
import { MenuUnfoldOutlined, } from "@ant-design/icons";
// import { connect } from "react-redux";


const Tod = (props) => {

  const [todoItem, setTodoItem] = useState(null)
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    console.log('init todo list from mongodb, utilize mongoose---->')
  }, [])
  const valChange = (e) => { setTodoItem(e.target.value) }
  const btnAddClk = () => {
    if (![...todoList].includes(todoItem)) {
      setTodoItem('')
      setTodoList([...todoList, todoItem])
    } else {
      message.error('TodoList 中已存在相同的 TodoItem');
    }
  }
  const delTodoItem = (ind) => { let newList = [...todoList]; newList.splice(ind, 1); setTodoList(newList) }
  return (
    <>
      <div style={{ width: 600, margin: '100px auto', }}>
        <div>
          <Input type="text" placeholder="请输入待办事项" style={{ 'width': '80%', }} value={todoItem} prefix={<MenuUnfoldOutlined />} onChange={valChange} ></Input>
          <Button type="primary" style={{ 'marginLeft': '3%' }} onClick={btnAddClk}>增加</Button>
        </div>
        <ul style={{ 'marginTop': 5 }}>
          {todoList.map((val, idx) => { return <li style={{ 'paddingTop': 10, }} key={val} ><Checkbox onClick={delTodoItem.bind(this, idx)}>{val}</Checkbox></li> })}
        </ul>
      </div>
    </>
  )
}

export default Tod