import React, { useState, useEffect, useRef } from "react";
import { Button, message, Input, Checkbox } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
// import { connect } from "react-redux";

const Tod = props => {
  const inputEl = useRef(null);
  const [todoItem, setTodoItem] = useState(null);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log("init todo list from mongodb, utilize mongoose---->");
  }, []);

  const valChange = e => {
    setTodoItem(e.target.value);
  };

  const btnAddClk = () => {
    if (todoItem === null || todoItem.trim().length === 0) {
      message.error("不可为空");
    } else if ([...todoList].includes(todoItem)) {
      message.error("TodoList 中已存在相同的 TodoItem");
    } else {
      setTodoItem("");
      setTodoList([...todoList, todoItem]);
      // send the list to backend, then save into mongodb
    }
  };

  const delTodoItem = ind => {
    let newList = [...todoList];
    newList.splice(ind, 1);
    setTodoList(newList);
  };

  inputEl && inputEl.current && inputEl.current.focus();

  return (
    <>
      <div style={{ width: 600, margin: "100px auto" }}>
        <div>
          <Input
            ref={inputEl}
            type="text"
            placeholder="请输入待办事项"
            style={{ width: "80%" }}
            value={todoItem}
            prefix={<MenuUnfoldOutlined />}
            autoFocus={true}
            onChange={valChange}
          ></Input>
          <Button
            type="primary"
            style={{ marginLeft: "3%" }}
            onClick={btnAddClk}
          >
            增加
          </Button>
        </div>
        <ul style={{ paddingLeft: 0, marginTop: 5, listStyle: "none" }}>
          {todoList.map((val, idx) => {
            return (
              <li style={{ paddingTop: 10 }} key={val}>
                <Checkbox onClick={delTodoItem.bind(this, idx)}>{val}</Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tod;
