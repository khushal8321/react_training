import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'addtodo':
      return {
        todos: [...state.todos, { text: action.text, status: false }],
        todoCount: state.todoCount + 1
      };
    case 'deletetodo':
      return {
        todos: state.todos.filter((_, index) => index !== action.index),
        todoCount: state.todoCount - 1
      };
    case 'edittodo':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, text: action.text } : todo
        ),
        todoCount: state.todoCount
      };
    case 'status':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, status: !todo.status } : todo
        ),
        todoCount: state.todoCount
      };
    default:
      return state;
  }
}

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const deletetodo = index => {
    dispatch({ type: 'deletetodo', index });
  };

  const edittodo = (index, text) => {
    setEditIndex(index);
    setText(text);
  };

  const saveEdit = index => {
    dispatch({ type: 'edittodo', index, text });
    setEditIndex(-1);
    setText('');
  };

  const toggleStatus = index => {
    dispatch({ type: 'status', index });
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (editIndex !== -1) {
            saveEdit(editIndex);
          } else {
            dispatch({ type: 'addtodo', text });
          }
          setText('');
        }}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">{editIndex !== -1 ? 'Save' : 'Add'}</button>
      </form>

      {todos.map((todo, index) => (
        <div key={index}>
          {editIndex === index ? (
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          ) : (
            <div>{todo.text}</div>
          )}
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => toggleStatus(index)}
          />
          {editIndex === index ? (
            <button onClick={() => saveEdit(index)}>Save</button>
          ) : (
            <>
              <button onClick={() => deletetodo(index)}>Delete</button>
              <button onClick={() => edittodo(index, todo.text)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
