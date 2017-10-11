import React, { Component } from 'react';
import uuid from 'uuid/v4'

import Todo from './Todo.js'
import Completed from './Completed.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
    this.markAsCompleted = this.markAsCompleted.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.markAllAsCompleted = this.markAllAsCompleted.bind(this)
  }

  addTask( titleTask ) {
    const newTask = {
      id: uuid(),
      title: titleTask,
      done: false
    }
    this.setState({
      tasks: [ ...this.state.tasks, newTask ]
    })
  }

  markAsCompleted( idTask ) {
    const updatedTasks = this.state.tasks.map( task => {
      if (idTask === task.id) task.done = true
      return task
    })
    this.setState({
      tasks: updatedTasks
    })
  }

  markAllAsCompleted( ) {
    const updatedTasks = this.state.tasks.map( task => {
      task.done = true
      return task
    })
    this.setState({
      tasks: updatedTasks
    })
  }

  removeTask( idTask ) {
    const TasksMinusOne = this.state.tasks.filter( task => {
      return task.id !== idTask
    })
    this.setState({
      tasks: TasksMinusOne
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Todo
              addTask={this.addTask}
              markAsCompleted={this.markAsCompleted}
              tasks={this.state.tasks}
              markAllAsCompleted={this.markAllAsCompleted}
            />
          </div>
          <div className="col-md-6">
            <Completed
              tasks={this.state.tasks}
              removeTask={this.removeTask}
            />
          </div>
        </div>
      </div>
    )

  }
}

export default App