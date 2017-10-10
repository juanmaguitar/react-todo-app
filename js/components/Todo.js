const Todo = props => {
  const pendingTasks = props.tasks.filter(task => !task.done)
  const listTasks = pendingTasks.map(task => 
    <ItemTask markAsCompleted={props.markAsCompleted} key={task.id} task={task} />
  );
  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <AddTaskForm addTask={ props.addTask } />
      <button id="checkAll" className="btn btn-success">Mark all as done</button>
      <hr/>
      <ul id="sortable" className="pending-tasks list-unstyled">
        { listTasks }
      </ul>
      <div className="todo-footer">
        <strong>
          <span className="count-todos" />
        </strong>{ pendingTasks.length } Items Left
      </div>
    </div>
  )
}
