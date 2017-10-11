import React, { Component } from 'react';
import uuid from 'uuid/v4'

import Todo from './Todo.js'
import Completed from './Completed.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        {
          id: uuid(),
          title: 'Buy Gold',
          done: false
        },
        {
          id: uuid(),
          title: 'Buy Car',
          done: false
        },
        {
          id: uuid(),
          title: 'Buy House',
          done: false
        },
        {
          id: uuid(),
          title: 'Buy TV',
          done: true
        },
        {
          id: uuid(),
          title: 'Buy Something',
          done: false
        }
      ]
    }

    this.addTask = this.addTask.bind(this)
    this.markAsCompleted = this.markAsCompleted.bind(this)
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Todo
              addTask={this.addTask}
              markAsCompleted={this.markAsCompleted}
              tasks={this.state.tasks}
            />
          </div>
          <div className="col-md-6">
            <Completed tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    )

  }
}

export default App