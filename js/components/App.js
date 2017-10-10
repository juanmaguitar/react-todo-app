class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1507643422624,
          title: "buy Gold",
          done: false
        },
        {
          id: 1507643445889,
          title: "buy iPhone",
          done: true
        }
      ]
    }
    this.addTask = this.addTask.bind(this)
    this.markAsCompleted = this.markAsCompleted.bind(this)
  }

  addTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  markAsCompleted(idTask) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (idTask === task.id) task.done = true
        return task
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Todo markAsCompleted={this.markAsCompleted} addTask={this.addTask} tasks={this.state.tasks} />
          </div>
          <div className="col-md-6">
            <Completed tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}
