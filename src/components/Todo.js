import React from 'react';

import TaskItem from './TaskItem'

const demoTask = {
  id: +new Date(),
  title: 'Buy Gold',
  done: false
}

const Todo = () => (
  <div className="todolist not-done">
    <h1>Todos</h1>
    <input type="text" className="form-control add-todo" placeholder="Add todo" />
    <button id="checkAll" className="btn btn-success">Mark all as done</button>
    <hr />
    <ul id="sortable" className="list-unstyled">
      <TaskItem task={ demoTask } />
      <TaskItem task={ demoTask } />
      <TaskItem task={ demoTask } />
    </ul>
    <div className="todo-footer">
      <strong><span className="count-todos" /></strong> Items Left
    </div>
  </div>
)

export default Todo