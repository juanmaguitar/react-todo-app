class ItemTask extends React.Component {
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
    const task = this.props.task
    return (
      <li className="ui-state-default">
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={task.done} onChange={this.handleChange}/>
            <span>{task.title}</span>
          </label>
          {
            task.done && 
            <button onClick={this.handleClick} className="remove-item btn btn-default btn-xs pull-right">
              <span className="glyphicon glyphicon-remove" />
            </button>
          }
        </div>
      </li>
    )
  }
}

