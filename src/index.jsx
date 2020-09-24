import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputHandler from './InputHandler';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({ id: 1, todo: '' });

  const { id, todo } = todoItem;

  function onChange(e) {
    setTodoItem({ id, todo: e.target.value });
  }

  function onCreate() {
    if (todo === '') {
      return;
    }

    setTodoList([...todoList, todoItem]);
    setTodoItem({ id: id + 1, todo: '' });
  }

  function onClickRemove(key) {
    setTodoList(todoList.filter((item) => item.id !== key));
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <InputHandler todo={todo} onCreate={onCreate} onChange={onChange} />
        <TodoList todoList={todoList} onClickRemove={onClickRemove} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
