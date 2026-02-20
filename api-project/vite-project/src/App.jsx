import { useState } from "react";


function App() { 

  const [users ,setUsers] = useState("")
  
  // async function gitubUsers (){

  //   const responce = await fetch("https://api.github.com/users")

  //   const data =  await responce.json();
  //   setUsers(data) 

  //   console.log(data)

    



  // } 
  // gitubUsers();

  return (
    <> 
    <h1>The git hub users</h1>  

    <div>
      {
      users.map(user => (
        <img src = {users.avatar_url}></img>
      ))
      }
    </div>
      
    </>
  )
}

export default App
