import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  todos: []
};

function reducer(state=INITIAL_STATE, action){
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, {task: action.task, id: uuid()}] }
    }
    case "UPDATE_TODO": {
      const todos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, task: action.updatedTask };
        }
        return todo;
      });
      
      return {
        ...state, todos
      }
    }
    case "REMOVE_TODO": {
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id)};
    }
    default: 
      return state;
  }
}

export default reducer;