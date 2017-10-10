const Completed = props => {
    const completedTasks = props.tasks.filter(task => task.done)
    const listTasks = completedTasks.map(task => 
      <ItemTask removeTask={props.removeTask} key={task.id} task={task} />
    );
    return (
      <div className="todolist">
        <h1>Already Done</h1>
        <ul className="done-tasks list-unstyled">
          {listTasks}
        </ul>
      </div>
    )
  }
  