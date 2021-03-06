import React, { useState } from "react";

function NewTodoForm({createTodo}) {
  const [task, setTask] = useState('');

  function handleChange(evt){
    setTask(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    createTodo(task);
    setTask('');
  }

  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Task:</label>
        <input
          name="task"
          type="text"
          placeholder = "I want to..."
          onChange={handleChange}
          value={task}
        />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;