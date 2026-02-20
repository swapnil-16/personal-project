import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {


  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript" },
    { id: 2, text: "Learn React" },
  ]);

  //const todos = ["walking" ,"reading", "chess","playing-cricket", "coding","traveling" ]

  const [text, setText] = useState("");

  const handleClicked = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: text.trim() }]);
    setText("");
    console.log(Date.now()) 
    
  };

  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
    
  }; 

  

  return (
    <>
      <div>
        <h1>Todo App</h1>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleClicked}>Add</button>

        <ul>
          {todos.map((todo) => (
            <li key={todos.id}>
              {todo.text} 
              
              <button onClick={() => handelDelete(todo.id) } >Delete</button> 
              
            </li>
          ))}
        </ul> 
        
      </div>
    </>
  );
}

export default App;
