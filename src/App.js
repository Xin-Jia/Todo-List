import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase';
import firebase from 'firebase';
import TodoListItem from './Todo';


function App() {

  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []); //leave [] empty so it runs only on first run

  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress
      }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput('');
  }

  return (

    <div >
      <div className="App">
        <h1>Xinjia's Todos App 📃 </h1>
        <form>
          <TextField
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
            id="write-todo"
            label="Write a Todo" />
          <Button type="submit" id="submit-btn"
            variant="contained"
            onClick={addTodo}>Default</Button>
        </form>

        <div className="todos-list">
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
