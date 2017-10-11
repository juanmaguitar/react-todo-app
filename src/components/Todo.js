import React from 'react';

import TaskItem from './TaskItem'
import AddTaskForm from './AddTaskForm'

const Todo = props => {
  const todoTasks = props.tasks.filter( task => !task.done )

  const handleClick = () => {
    props.markAllAsCompleted()
  }

  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <AddTaskForm
        addTask={props.addTask}
      />
      <button onClick={ handleClick } id="checkAll" className="btn btn-success">Mark all as done</button>
      <hr />

      <ul id="sortable" className="list-unstyled">
        {
          todoTasks.map( task => (
            <TaskItem
              key={task.id}
              task={task}
              markAsCompleted={props.markAsCompleted}
            />
          ))
        }
      </ul>
      <div className="todo-footer">
        <strong className="count-todos">{ todoTasks.length }</strong> Items Left
      </div>
    </div>
  )
}

export default Todo