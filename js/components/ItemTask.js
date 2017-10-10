class ItemTask extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.markAsCompleted(this.props.task.id)
    console.log(e.target.checked);
  }

  render() {
    const task = this.props.task
    return (
      <li className="ui-state-default">
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={task.done} onChange={this.handleChange}/>
            {task.title}
          </label>
          {
            task.done && 
            <button className="remove-item btn btn-default btn-xs pull-right">
              <span className="glyphicon glyphicon-remove" />
            </button>
          }
        </div>
      </li>
    )
  }
}

