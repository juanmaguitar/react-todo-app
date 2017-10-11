import React from 'react';

const TaskItem = props => (
  <li className="ui-state-default">
    <div className="checkbox">
      <label>
        <input type="checkbox" defaultValue />{ props.task.title }</label>
    </div>
  </li>
)

export default TaskItem
