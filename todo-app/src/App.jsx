import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {


  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript" },
    { id: 2, text: "Learn React" },
  ]);


  // const [todos, setTodos] = useState(() => {
  //   const saved = localStorage.getItem('my-todos'); // same key name!
  //   if (saved) {
  //     return JSON.parse(saved); // convert string back to array
  //   }
  //   return [  // default initial value
  //     { id: 1, text: "Learn JavaScript" },
  //     { id: 2, text: "Learn React" },
  //   ];
  // });
  ///////////////////////////////// following is the local storage code

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

  //   useEffect(()=> {
  //  localStorage.setItem("my-todos" , JSON.stringify(todos))
  //   },[todos])


  // useEffect(() => {
  //   console.log("text changes", text)
  // }, [todos.text]) 

  // useEffect(()=> {
  //   console.log("todos changes" , todos.length)
  // },[todos.length])


  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Todo App</h1>

        <div className="row">
          {/* Input section */}
          <div className="col-md-6 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo"
              />

              <button
                className="btn btn-danger"
                onClick={handleClicked}
              >
                Add
              </button>
            </div>
          </div>

          {/* Todo list section */}
          <div className="col-md-6">
            <ul className="list-group">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {todo.text}

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handelDelete(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

