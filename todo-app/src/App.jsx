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

  const [editId, setEditId] = useState(null);

  const handleClicked = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: text.trim() }]);
    setText("");

    console.log(Date.now())

  };

  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  const handelEdit = (id) => {
    const userToedit = todos.find(todo => todo.id === id)
    if (userToedit) {
      setText(userToedit.text)
      setEditId(userToedit.id)

    }

  }

  const saveEditedTodo = () => { 
if (text.trim() === "") return;

setTodos( todos.map(todo => todo.id === editId ? {...todo , text : text }: todo)) 
setText("")
setEditId(null) 

  } 

 const handelPin = (id) => {
const userToPin = todos.find(todo => todo.id === id) 
 const remeaningTodos = todos.filter(todo => todo.id !== id)

setTodos([userToPin , ...remeaningTodos])


 }

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
        <h1 className="text-center mb-4">Crud Operations</h1>

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
                disabled={editId !== null}
              >
                Add
              </button>
              <button
                className="btn btn-primary"
                onClick={saveEditedTodo} 
                
              >
                save
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

                  <button
                    className="btn btn-primary "
                    onClick={() => handelEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button> 
                  <button
                    className="btn btn-warning "
                    onClick={() => handelPin(todo.id)}
                  >
                    Pin
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

