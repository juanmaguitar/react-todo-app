class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.markAsCompleted = this.markAsCompleted.bind(this);
    this.markAllAsCompleted = this.markAllAsCompleted.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  markAsCompleted(idTask) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (idTask === task.id) task.done = true;
        return task;
      })
    });
  }

  markAllAsCompleted() {
    this.setState({
      tasks: this.state.tasks.map(task => {
        task.done = true;
        return task;
      })
    });
  }

  removeTask(idTask) {
    this.setState({
      tasks: this.state.tasks.filter(task => idTask !== task.id)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Todo
              markAllAsCompleted={this.markAllAsCompleted}
              markAsCompleted={this.markAsCompleted}
              addTask={this.addTask}
              tasks={this.state.tasks}
            />
          </div>
          <div className="col-md-6">
            <Completed removeTask={this.removeTask} tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}
