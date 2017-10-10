class AddTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: +new Date(),
      title: this.state.value,
      completed: false
    };
    this.props.addTask(newTask);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control add-todo"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add todo"
        />
      </form>
    );
  }
}
