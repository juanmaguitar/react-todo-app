import React, { Component } from 'react';

class AddTaskForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addTask(this.state.value);
    this.setState({
      value: ''
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          onChange={ this.handleChange }
          type="text"
          value={ this.state.value }
          className="form-control add-todo"
          placeholder="Add todo"
        />
      </form>
    )
  }
}

export default AddTaskForm
