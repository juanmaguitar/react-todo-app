import React, { Component } from 'react';

class TaskItem extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.props.markAsCompleted(this.props.task.id)
  }

  handleClick(e) {
    this.props.removeTask(this.props.task.id)
  }

  render() {
    return (
      <li className="ui-state-default">
        <div className="checkbox">
          <label>
            {
              !this.props.task.done &&
              <input
                type="checkbox"
                onChange={this.handleChange}
              />
            }
            { this.props.task.title }
            </label>
            {
              this.props.task.done &&
              <button onClick={ this.handleClick } className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove" /></button>
            }
        </div>
      </li>
    )
  }

}

export default TaskItem
