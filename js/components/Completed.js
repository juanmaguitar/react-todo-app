// const Completed = () => (
//   <div className="todolist">
//     <h1>Already Done</h1>
//     <ul id="done-items" className="list-unstyled">
//       <li>
//         Some item{" "}
//         <button className="remove-item btn btn-default btn-xs pull-right">
//           <span className="glyphicon glyphicon-remove" />
//         </button>
//       </li>
//     </ul>
//   </div>
// );

const Completed = props => {
    const completedTasks = props.tasks.filter(task => task.done)
    const listTasks = completedTasks.map(task => 
      <ItemTask key={task.id} task={task} />
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
  