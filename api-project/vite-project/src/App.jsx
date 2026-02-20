import { useEffect, useState } from "react"; 


function App() { 

  const [users ,setUsers] = useState([]) 

useEffect(()=>{


async function gitubUsers (){

    const responce = await fetch("https://api.github.com/users")

    const data =  await responce.json();
    setUsers(data) 

  } 
  gitubUsers();



},[])
  
  

  return (
    <> 
    <h1>The git hub users</h1>  

    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:10}}>
      

      {users.map(user => (<img src={user.avatar_url} style={{height:200 , width:200 }}></img>) )}
    </div>
      
    </>
  )
}

export default App
