import React from 'react';

import Todo from './Todo.js'
import Completed from './Completed.js'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <Todo />
      </div>
      <div className="col-md-6">
        <Completed />
      </div>
    </div>
  </div>
)

export default App