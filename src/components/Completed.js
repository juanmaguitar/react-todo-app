import React from 'react';

import TaskItem from './TaskItem'

const Completed = props => {
  const completedTasks = props.tasks.filter( task => task.done )
  return (
    <div className="todolist done">
      <h1>Already Done</h1>
      <ul id="done-items" className="list-unstyled">
        {
          completedTasks.map( task => (
            <TaskItem key={task.id} task={ task } />
          ))
        }
      </ul>
    </div>
  )
}

export default Completed