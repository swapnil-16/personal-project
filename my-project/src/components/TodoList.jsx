import { useState } from "react";


function TodoList({tasks}){
const todos = ["react", "java", "sql", "mongodb", ]

function OnLikePress(){
     console.log(tasks)
    alert("you are making progess")
       
}
 return(
    <>
<div>
    <ol > 
        <input type="text"></input>
        <input type="text"></input>
        <button className="btn-danger" onClick={OnLikePress}>add</button>
        <li  >{tasks.taskname}</li>
        <li>{tasks.tasktime}</li>
    </ol>
    </div> 
    


    </>
 )

}
 
export default TodoList 



// function TodoApp() {
//   const [inputValue, setInputValue] = useState("");
//   const [todos, setTodos] = useState(["java", "sql"]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       <button
//         className="btn-danger"
//         onClick={() => {
//           if (inputValue.trim() === "") return;
//           setTodos([...todos, inputValue]);
//           setInputValue("");
//         }}
//       >
//         Add
//       </button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

